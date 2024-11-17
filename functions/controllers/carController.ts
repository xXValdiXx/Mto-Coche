import { Request, Response } from "express";
import { carService } from "../services/carService";
import { Car } from "../interfaces/carInterface";
import { CarQueryOptions } from "../interfaces/carQueryInterface";

export const carController = {
  async createCar(req: Request, res: Response): Promise<void> {
    try {
      const car: Car = {
        model: req.body.model as string,
        color: req.body.color as string,
        owner: req.body.owner as string,
        year: req.body.year as number,
        services: req.body.services as string[],
      };

      const addCar = await carService.addCar(car);
      res.status(200).json(addCar);
    } catch (error) {
      console.error("Error adding car document:", error);
      res.status(500).json({ error: "Failed to add car document" });
    }
  },
  
  async getCars(req: Request, res: Response): Promise<void> {
    const payload = req.query as unknown as CarQueryOptions

    if (req.query.color) {
      payload.color = req.query.color as string;
    }

    if (req.query.year) {
      payload.year = Number(req.query.year);
    }

    if (req.query.services) {
      payload.services = req.query.services as string;
    }

    try {
      const cars = await carService.getCars(payload);
      if (cars) {
        res.status(200).json(cars);
      } else {
        res.status(404).json({ message: "Cars not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cars" });
    }
  },

  async getCarById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const car = await carService.getCarById(id);
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    } catch (error) {
      console.error("Error fetching car by ID:", error);
      res.status(500).json({ error: "Failed to fetch car by ID" });
    }
  },

  async updateCar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const carUpdates: Car = {
        model: req.body.model,
        color: req.body.color,
        owner: req.body.owner,
        year: req.body.year,
        services: req.body.services,
      };

      await carService.updateCar(id, carUpdates);
      res.status(200).json({ message: "Car updated successfully" });
    } catch (error) {
      console.error("Error updating car:", error);
      res.status(500).json({ error: "Failed to update car" });
    }
  },

  async deleteCar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await carService.deleteCar(id);
      res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
      console.error("Error deleting car:", error);
      res.status(500).json({ error: "Failed to delete car" });
    }
  }
};
