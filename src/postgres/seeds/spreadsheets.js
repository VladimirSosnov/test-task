import env  from "#config/env/env.js";

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function seed(knex) {
    const sheetIds = env.GOOGLE_SHEET_IDS?.split(",") ?? [];
    
    const insertRows = sheetIds.map((sheetId) => {
        return { spreadsheet_id: sheetId } 
    })

    await knex("spreadsheets")
        .insert(insertRows)
        .onConflict(["spreadsheet_id"])
        .ignore();
}
