import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

//for query postgres
const connectionString = process.env.DATABASE_URL || "postgres://postgres:123123@localhost:5432/postgres";
const queryClient = postgres(connectionString);
export const db = drizzle(queryClient, { schema });
