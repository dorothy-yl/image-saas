import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgres://postgres:123123@localhost:5432/postgres",
  },
  strict: true,
  verbose: true,
});
