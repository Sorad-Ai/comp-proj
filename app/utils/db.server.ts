// app/utils/db.server.ts
import { MongoClient } from 'mongodb';
import invariant from "tiny-invariant";

invariant(process.env.MONGODB_URI, "MONGODB_URI must be defined");
const uri = process.env.MONGODB_URI;

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


