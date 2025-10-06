import Database from 'better-sqlite3';
import { resolve } from 'path';
import { postsTable } from './schema';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDataBase = new Database(sqliteDatabasePath);

export const drizzleDb = drizzle(sqliteDataBase, {
  schema: { posts: postsTable, logger: false },
});
