import { uuid } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid(),
  nome: varchar(255),
  email: varchar(255),
  senha:varchar(6),
})