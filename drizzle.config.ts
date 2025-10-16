import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123123",
    database: "image-sass",
  },
  strict: true,
  verbose: true,
});
