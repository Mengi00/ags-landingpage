import { type User, type InsertUser, type Lead, type InsertLead } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
  getAllLeads(): Promise<Lead[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private leads: Map<string, Lead>;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const lead: Lead = { 
      id,
      nombre: insertLead.nombre,
      apellido: insertLead.apellido,
      empresa: insertLead.empresa,
      cargo: insertLead.cargo ?? null,
      email: insertLead.email,
      lada: insertLead.lada,
      telefono: insertLead.telefono,
      dotacion: insertLead.dotacion ?? null,
      pais: insertLead.pais,
      createdAt: new Date(),
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getAllLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }
}

export const storage = new MemStorage();
