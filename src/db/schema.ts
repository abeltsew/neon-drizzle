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
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});

// Post has many comments association in drizzle

// export const postComments = posts.hasMany(comments);

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  body: varchar('content', { length: 255 }).notNull(),
  postId: integer('post_id')
    .notNull()
    .references(() => posts.id),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
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

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});

export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id')
    .notNull()
    .references(() => orders.id),
  productId: integer('product_id')
    .notNull()
    .references(() => products.id),
  quantity: integer('quantity').notNull(),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});

export const carts = pgTable('carts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  productId: integer('product_id')
    .notNull()
    .references(() => products.id),
  quantity: integer('quantity').notNull(),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});

export const cartItems = pgTable('cart_items', {
  id: serial('id').primaryKey(),
  cartId: integer('cart_id')
    .notNull()
    .references(() => carts.id),
  productId: integer('product_id')
    .notNull()
    .references(() => products.id),
  quantity: integer('quantity').notNull(),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});

// Add Chat model
export const chats = pgTable('chats', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  message: varchar('message', { length: 255 }).notNull(),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});

export const chatMessages = pgTable('chat_messages', {
  id: serial('id').primaryKey(),
  chatId: integer('chat_id')
    .notNull()
    .references(() => chats.id),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  message: varchar('message', { length: 255 }).notNull(),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});
