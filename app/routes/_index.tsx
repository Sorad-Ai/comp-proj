// app/routes/_index.tsx
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { getDb } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  try {
    await getDb(); // Just try to connect
    return json({ message: "Connected to MongoDB!" });
  } catch (error: any) {
    return json({ message: `Failed to connect: ${error.message}` }, { status: 500 });
  }
};

export default function IndexRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>MongoDB Status</h1>
      <p>{data.message}</p>
    </div>
  );
}