// SQLite managment
import { Habbit } from "@/store/store";
import * as SQLite from "expo-sqlite";

export async function createTables() {
  const db = await SQLite.openDatabaseAsync("habbits-tracker.db");

  db.execAsync(
    `
        CREATE TABLE IF NOT EXISTS bad_habbits (
            id INTEGER PRIMARY KEY UNIQUE,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            type TEXT NOT NULL,
            count INTEGER NOT NULL,
            date TEXT NOT NULL
        );

        INSERT INTO bad_habbits 
        (id, title, description, type, count, date) 
        VALUES (234, 'test', 'test', 'count', 0, '2022-12-12');

        INSERT INTO bad_habbits
        (id, title, description, type, count, date)
        VALUES (123, 'test2', 'test2', 'count', 0, '2022-12-12');
        `
  );
  db.execAsync(
    `
        CREATE TABLE IF NOT EXISTS good_habbits (
            id INTEGER PRIMARY KEY UNIQUE,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            type TEXT NOT NULL,
            count INTEGER NOT NULL,
            date TEXT NOT NULL
        );

        INSERT INTO good_habbits
        (id, title, description, type, count, date)
        VALUES (13256, 'test2', 'test2', 'count', 0, '2022-12-12');

        INSERT INTO good_habbits
        (id, title, description, type, count, date)
        VALUES (1293, 'test2', 'test2', 'count', 0, '2022-12-12');
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
        (id, title, description, type, count, date)
        VALUES (${badHabbit.id}, '${badHabbit.title}', '${badHabbit.description}', '${badHabbit.type}', ${badHabbit.count}, '${badHabbit.date}')
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
        (id, title, description, type, count, date)
        VALUES (${goodHabbit.id}, '${goodHabbit.title}', '${goodHabbit.description}', '${goodHabbit.type}', ${goodHabbit.count}, '${goodHabbit.date}')
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
