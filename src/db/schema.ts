import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

// create a user pgTable

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  userName: varchar('user_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  body: varchar('content', { length: 255 }).notNull(),
});

// Post has many comments association in drizzle

// export const postComments = posts.hasMany(comments);

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  body: varchar('content', { length: 255 }).notNull(),
  postId: integer('post_id')
    .notNull()
    .references(() => posts.id),
});

export const likes = pgTable('likes', {
  id: serial('id').primaryKey(),
  postId: integer('post_id')
    .notNull()
    .references(() => posts.id),
  userId: integer('user_id').references(() => users.id),
});

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  price: integer('price').notNull(),
  description: varchar('description', { length: 255 }).notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});
