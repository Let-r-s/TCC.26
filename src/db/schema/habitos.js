// schema.ts
import { uuid } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid(),
  nome: varchar(255),
  descricao: varchar(255),
  dataCriacao:varchar(255),
  usuarioId: uuid(),
})
