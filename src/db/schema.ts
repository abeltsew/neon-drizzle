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

//  Add profile model
export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  bio: varchar('bio', { length: 255 }).notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  createdAt: varchar('created_at', { length: 255 }).notNull(),
  updatedAt: varchar('updated_at', { length: 255 }).notNull(),
});
// Add clients model
export const clients = pgTable('clients', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  clientId: varchar('client_id', { length: 255 }).notNull(),
  clientSecret: varchar('client_secret', { length: 255 }).notNull(),
  redirectUri: varchar('redirect_uri', { length: 255 }).notNull(),
  grants: varchar('grants', { length: 255 }).notNull(),
});

// Add access tokens model
export const accessTokens = pgTable('access_tokens', {
  id: serial('id').primaryKey(),
  accessToken: varchar('access_token', { length: 255 }).notNull(),
  accessTokenExpiresAt: varchar('access_token_expires_at', {
    length: 255,
  }).notNull(),
  scope: varchar('scope', { length: 255 }).notNull(),
  clientId: varchar('client_id', { length: 255 }).notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
});

// model for return policy

export const returned = pgTable('returns', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  orderId: integer('order_id')
    .notNull()
    .references(() => orders.id),
  productId: integer('product_id')
    .notNull()
    .references(() => products.id),
});
