import { Tariff } from "#interfaces/wb.interface.js";
import env  from "#config/env/env.js";

export async function getTariff(date: string): Promise<Tariff> {
    const URL = 'https://common-api.wildberries.ru/api/v1/tariffs/box?date=' + date;

    const response = await fetch(URL, {
        headers: {
            Authorization: env.TOKEN,
        },
        method: 'GET',
    });

    const wbTariff: Tariff = await response.json();
        
    return wbTariff;
};

