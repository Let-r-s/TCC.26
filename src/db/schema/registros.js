import { uuid } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid(),
  dados: varchar(255),
  status: varchar(255),
  habitoId: uuid(),
})