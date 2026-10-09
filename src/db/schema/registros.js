import { uuid } from "drizzle-orm/pg-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const registros = pgTable('registros', {
  id: uuid(),
  dados: varchar(255),
  status: varchar(255),
  habitoId: uuid(),
})