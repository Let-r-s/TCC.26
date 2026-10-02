import { defineConfig } from "drizzle-kit";
import "dotenv/configure"

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema',
  out: "./drizzle",
dbCredentials: {
  url: process.env.DATABASE_URL
}

})
