import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

// create a user pgTable

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  userName: varchar('user_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});
