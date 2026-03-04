import { updateSheets } from "#services/google.service.js"
import { saveTariff } from "#services/tariffs.service.js"
import { getTariff } from "#services/wb.service.js"
import cron from "node-cron"
import { logger } from "#logger/logger.js";

export async function startScheduler() {
    cron.schedule('*/5 * * * * *', async () => {
        logger.info('Tariffs start updating');

        const today = new Date().toISOString().split("T")[0];

        const tariff = await getTariff(today);
        await saveTariff(tariff, today);
    
        await updateSheets();

        logger.info('Tariffs end updating');
    });
};