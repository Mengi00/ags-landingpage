import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nombre: text("nombre").notNull(),
  apellido: text("apellido").notNull(),
  empresa: text("empresa").notNull(),
  cargo: text("cargo"),
  email: text("email").notNull(),
  lada: text("lada").notNull(),
  telefono: text("telefono").notNull(),
  dotacion: text("dotacion"),
  pais: text("pais").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Email inválido"),
  telefono: z.string().min(8, "Teléfono debe tener al menos 8 dígitos"),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
