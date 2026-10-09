// schema.ts
import { uuid } from "drizzle-orm/pg-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const habitos = pgTable('habitos', {
  id: uuid(),
  nome: varchar(255),
  descricao: varchar(255),
  dataCriacao:varchar(255),
  usuarioId: uuid(),
})
