import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      //todo: Integrate with Twenty CRM - send lead data to CRM API
      //todo: Set up persistent database or CRM forwarding for production
      console.log("New lead created:", lead);
      
      res.json({ success: true, lead });
    } catch (error: any) {
      console.error("Error creating lead:", error);
      res.status(400).json({ 
        success: false, 
        error: error.message || "Error al procesar la solicitud" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
