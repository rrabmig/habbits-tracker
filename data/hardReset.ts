import { createTables, getBadHabbits, getGoodHabbits } from "./LocalDatabase";
import * as SQLite from "expo-sqlite";

export async function hardReset() {
    const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  
    await db.execAsync(`
      DROP TABLE IF EXISTS bad_habbits;
      DROP TABLE IF EXISTS good_habbits;
    `);
    console.log("tables dropped");

    await createTables();

    console.log("tables created");
  }
   