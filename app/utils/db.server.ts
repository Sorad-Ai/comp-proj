// app/utils/db.server.ts
import { MongoClient } from 'mongodb';
import invariant from "tiny-invariant";

const uri = 'mongodb+srv://soradai707:XYMWVSU7uoL4XRBS@cluster0.plggy.mongodb.net/';

let client: MongoClient | null = null;

async function getMongoClient(): Promise<MongoClient> {
  if (client) return client;
  client = new MongoClient(uri);
  await client.connect();
  return client;
}

export async function getDb() {
  const client = await getMongoClient();
  return client.db(); // Use default database from MONGODB_URI
}


