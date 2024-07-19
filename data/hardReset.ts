import { createTables, getBadHabbits, getGoodHabbits } from "./LocalDatabase";
import * as SQLite from "expo-sqlite";

import { useBadHabbits, useGoodHabbits } from "@/store/store";

export async function hardReset() {
    const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
    const setBadHabbits = useBadHabbits((state) => state.setBadHabbits);
    const setGoodHabbits = useGoodHabbits((state) => state.setGoodHabbits);
  
    await db.execAsync(`
      DROP TABLE IF EXISTS bad_habbits;
      DROP TABLE IF EXISTS good_habbits;
    `);

    await createTables();

    setBadHabbits(await getBadHabbits());
    setGoodHabbits(await getGoodHabbits());
  }
   