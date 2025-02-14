// app/routes/test-db.tsx
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getDb } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  try {
    await getDb();
    return json({ message: "DB connection test: Success!" });
  } catch (error: any) {
    console.error("DB test error:", error);
    return json({ message: `DB connection test: Fail: ${error.message}` }, { status: 500 });
  }
};

export default function TestDbRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>DB Conne                 ction Test</h1>
      <p>{data.message}</p>
    </div>
  );
}