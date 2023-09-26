// import { neon, neonConfig } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-http';
// neonConfig.fetchConnectionCache = true;

// if (!process.env.DATABASE_URL) {
//   throw new Error('database not found');
// }

// const sql = neon(process.env.DATABASE_URL!);

// export const db = drizzle(sql);

import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

export const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// or
// export const client = new Client({
//   host: '127.0.0.1',
//   port: 5432,
//   user: 'postgres',
//   password: 'password',
//   database: 'db_name',
// });
