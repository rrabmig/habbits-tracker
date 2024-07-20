// SQLite managment
import { Habbit } from "@/store/store";
import * as SQLite from "expo-sqlite";
import { editedHabbitData } from "@/store/store";
export async function createTables() {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");

  db.execAsync(
    `
        CREATE TABLE IF NOT EXISTS bad_habbits (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            count INTEGER NOT NULL,
            date TEXT NOT NULL
        );

        INSERT INTO bad_habbits 
        (id, title, description, count, date) 
        VALUES (234, 'test', 'test', 0, '2022-12-12');

        INSERT INTO bad_habbits
        (id, title, description, count, date)
        VALUES (123, 'test2', 'test2', 0, '2022-12-12');
        `
  );
  db.execAsync(
    `
        CREATE TABLE IF NOT EXISTS good_habbits (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            count INTEGER NOT NULL,
            date TEXT NOT NULL
        );

        INSERT INTO good_habbits
               (id,    title,    description, count,  date       )
        VALUES (13256, 'test1', 'test2',        0,   '2022-12-12');

        INSERT INTO good_habbits
               (id,    title, description, count,    date)
        VALUES (1293, 'test2', 'test2',      0, '  2022-12-12');
        `
  );
}

export async function getBadHabbits(): Promise<Habbit[]> {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");

  const result: Habbit[] = await db.getAllAsync("SELECT * FROM bad_habbits");
  return result;
}

export async function addBadHabbit(badHabbit: Habbit) {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
        INSERT INTO bad_habbits
        (id, title, description, count, date)
        VALUES (${badHabbit.id}, '${badHabbit.title}', '${badHabbit.description}', ${badHabbit.count}, '${badHabbit.date}')
        `
  );
}

export async function removeBadHabbit(badHabbitId: number) {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
        DELETE FROM bad_habbits
        WHERE id = ${badHabbitId}
        `
  );
}

export async function increaseBadHabbitCount(badHabbitId: number) {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
        UPDATE bad_habbits
        SET count = count + 1
        WHERE id = ${badHabbitId}
        `
  );
}

export async function decreaseBadHabbitCount(badHabbitId: number) {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
        UPDATE bad_habbits
        SET count = MAX(0, count - 1)
        WHERE id = ${badHabbitId}
        `
  );
}

export async function getGoodHabbits(): Promise<Habbit[]> {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");

  const result: Habbit[] = await db.getAllAsync("SELECT * FROM good_habbits");
  return result;
}

export async function addGoodHabbit(goodHabbit: Habbit) {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
      INSERT INTO good_habbits
      (id, title, description, count, date)
      VALUES (${goodHabbit.id}, '${goodHabbit.title}', '${goodHabbit.description}', ${goodHabbit.count}, '${goodHabbit.date}')
    `
  );
}

export async function removeGoodHabbit(goodHabbitId: number) {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
        DELETE FROM good_habbits
        WHERE id = ${goodHabbitId}
        `
  );
}

export async function increaseGoodHabbitCount(goodHabbitId: number) {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
        UPDATE good_habbits
        SET count = count + 1
        WHERE id = ${goodHabbitId}
        `
  );
}

export async function decreaseGoodHabbitCount(goodHabbitId: number) {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
        UPDATE good_habbits
        SET count = MAX(0, count - 1)
        WHERE id = ${goodHabbitId}
        `
  );
}

export async function selectBadHabbitById(badHabbitId: number): Promise<Habbit> {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  const result: Habbit[] = await db.getAllAsync(
    `SELECT * FROM bad_habbits WHERE id = ${badHabbitId}`
  );
  return result[0];
}

export async function selectGoodHabbitById(goodHabbitId: number): Promise<Habbit> {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  const result: Habbit[] = await db.getAllAsync(
    `SELECT * FROM good_habbits WHERE id = ${goodHabbitId}`
  );
  return result[0];
}


export async function editGoodHabbit(editedData: editedHabbitData): Promise<void> {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
        UPDATE good_habbits
        SET title = '${editedData.title}', description = '${editedData.description}', count = ${editedData.count}'
        WHERE id = ${editedData.id}
        `
  );
}

export async function editBadHabbit(editedData: editedHabbitData): Promise<void> {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");
  await db.runAsync(
    `
        UPDATE bad_habbits
        SET title = '${editedData.title}', description = '${editedData.description}', count = ${editedData.count}'
        WHERE id = ${editedData.id}
        `
  );
}