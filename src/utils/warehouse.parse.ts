import { IWarehouse } from "#interfaces/wb.interface.js";

export interface IParsedWarehouse {
    boxDeliveryBase: number | null,
    boxDeliveryCoefExpr: number | null,
    boxDeliveryLiter: number | null,
    boxDeliveryMarketplaceBase: number | null,
    boxDeliveryMarketplaceCoefExpr: number | null,
    boxDeliveryMarketplaceLiter: number | null,
    boxStorageBase: number | null,
    boxStorageCoefExpr: number | null,
    boxStorageLiter: number | null,
};

type WarehouseNumericKey = keyof Omit<IWarehouse, 'geoName' | 'warehouseName'>;

export async function parseWarehouse(warehouse: IWarehouse): Promise<IParsedWarehouse> {
    const parsedWarehouse: IParsedWarehouse = {} as IParsedWarehouse;

    const keys: WarehouseNumericKey[] = Object.keys(warehouse)
        .filter(
            (key): key is WarehouseNumericKey =>
                key !== 'geoName' && key !== 'warehouseName'
        );

    for (const key of keys) {
        const value = warehouse[key];

        if (value === '-') {
            parsedWarehouse[key] = null;
            continue;
        };
        
        if (value.includes(',')) {
            parsedWarehouse[key] = Number(value.replace(',', '.'));
            continue;
        };

        parsedWarehouse[key] = Number(value);
    }

    return parsedWarehouse;
}