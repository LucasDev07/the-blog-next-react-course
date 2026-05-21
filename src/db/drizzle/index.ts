import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { resolve } from "path";
import { postsTable } from "./schemas";

const sqliteDataBasePath = resolve(process.cwd(), "db.sqlite3");
const sqliteDataBase = new Database(sqliteDataBasePath);

export const drizzleDb = drizzle(sqliteDataBase, {
  schema: {
    posts: postsTable,
  },
  logger: false,
});
