import { migrate, seed } from "#postgres/knex.js";
import { startScheduler } from "#scheduler/cron.js";


await migrate.latest();
await seed.run();

console.log('All migrations and seeds have been run')

await startScheduler();
