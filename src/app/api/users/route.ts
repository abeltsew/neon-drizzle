import { client } from '@/db';
import { users } from '@/db/schema';
import { drizzle } from 'drizzle-orm/node-postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  //   await db.insert(users).values({
  //     userName: 'abeltsew',
  //     email: 'abel@bbc.edu',
  //     password: '123',
  //     createdAt: '2021-09-01',
  //     updatedAt: '2021-09-01',
  //   });
  //   const res = await db.select().from(users);
  try {
    await client.connect();
  } catch (error) {
    console.error(error);
  }

  const db = drizzle(client);
  const res = await db.select().from(users);

  console.log({ res });

  return NextResponse.json(res);
}
