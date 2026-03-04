import { Tariff } from "#interfaces/wb.interface.js";
import knex from "#postgres/knex.js";
import { IParsedWarehouse, parseWarehouse } from "#utils/warehouse.parse.js";

export interface IInsertRowTariffParams extends IParsedWarehouse {
    warehouseName: string,
    date: string, 
    dtNextBox: string, 
    dtTillMax: string,
    geoName: string
};

export interface TodayTariffs extends IInsertRowTariffParams {};

export async function saveTariff(tariff: Tariff, date: string): Promise<void> {
    const promises = [];
    const warehouseList = tariff.response.data.warehouseList;
    const dtNextBox = tariff.response.data.dtNextBox;
    const dtTillMax = tariff.response.data.dtTillMax;

    for(const warehouse of warehouseList) {
        const parsedWarehouse = await parseWarehouse(warehouse);
        const params: IInsertRowTariffParams = {
            ...parsedWarehouse, 
            date, 
            dtNextBox, 
            dtTillMax,
            warehouseName: warehouse.warehouseName,
            geoName: warehouse.geoName
        };

        promises.push(insertRowTariff(params));
    };

    await Promise.all(promises);
};

async function insertRowTariff(warehouse: IInsertRowTariffParams): Promise<number[]> {
    return knex("box_tariffs")
        .insert({
            date: warehouse.date,
            dt_next_box: warehouse.dtNextBox,
            dt_till_max: warehouse.dtTillMax,
            warehouse_name: warehouse.warehouseName,
            geo_name: warehouse.geoName,
            box_delivery_base: warehouse.boxDeliveryBase,
            box_delivery_coef_expr: warehouse.boxDeliveryCoefExpr,
            box_delivery_liter: warehouse.boxDeliveryLiter,
            box_delivery_marketplace_base: warehouse.boxDeliveryMarketplaceBase,
            box_delivery_marketplace_coef_expr: warehouse.boxDeliveryMarketplaceCoefExpr,
            box_delivery_marketplace_liter: warehouse.boxDeliveryMarketplaceLiter,
            box_storage_base: warehouse.boxStorageBase,
            box_storage_coef_expr: warehouse.boxStorageCoefExpr,
            box_storage_liter: warehouse.boxStorageLiter
        })
        .onConflict(["warehouse_name"])
        .merge();
};

export async function getTodayTariffs(): Promise<TodayTariffs[]> {
  const today = new Date().toISOString().split("T")[0];

  return knex("box_tariffs")
    .where({ date: today })
    .orderBy("box_delivery_coef_expr", "asc");
};