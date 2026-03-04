import { google } from "googleapis";
import { getTodayTariffs, TodayTariffs } from "./tariffs.service.js";
import env  from "#config/env/env.js";
import knex from "#postgres/knex.js";

export async function updateSheets(): Promise<void> {
  const auth = new google.auth.GoogleAuth({
    keyFile: env.GOOGLE_KEY_FILE,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const sheetIds = await getSheetIds();

  const tariffs = await getTodayTariffs();

  const keys = Object.keys(tariffs[0]) as Array<keyof TodayTariffs>;

  const values = [
    keys,
    ...tariffs.map((t) => 
        keys.map((key) => t[key])
    ),
  ];

  for (const sheetId of sheetIds) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: "stocks_coefs!A1",
      valueInputOption: "RAW",
      requestBody: { values },
    });
  };
};

export async function getSheetIds(): Promise<string[]> {
    const sheet = await knex("spreadsheets")
    .select('spreadsheet_id');

    const sheetIds = sheet.map(sheetId => sheetId.spreadsheet_id );

    return sheetIds;
};