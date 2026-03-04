export interface Tariff {
    response: ITariffResponse
};

export interface ITariffResponse {
    data: ITariffData
};

export interface ITariffData {
    dtNextBox: string,
    dtTillMax: string,
    warehouseList: IWarehouse[]
};

export interface IWarehouse {
    boxDeliveryBase: string,
    boxDeliveryCoefExpr: string,
    boxDeliveryLiter: string,
    boxDeliveryMarketplaceBase: string,
    boxDeliveryMarketplaceCoefExpr: string,
    boxDeliveryMarketplaceLiter: string,
    boxStorageBase: string,
    boxStorageCoefExpr: string,
    boxStorageLiter: string,
    geoName: string,
    warehouseName: string
};


