import { Request, Response } from "express";
import { CarService } from "../services/carService";
import { Car } from "../Interfaces/carInterface";

export const CarController = {
  async createCar(req: Request, res: Response): Promise<void> {
    try {
      const car: Car = {
        model: req.body.model as string,
        color: req.body.color as string,
        owner: req.body.owner as string,
        year: req.body.year as number,
        services: req.body.services as string[],
      };

      const addCar = await CarService.addCar(car);
      res.status(200).json(addCar);
    } catch (error) {
      console.error("Error adding car document:", error);
      res.status(500).json({ error: "Failed to add car document" });
    }
  },
  
  async getCars(req: Request, res: Response): Promise<void> {
    try {
      const car = await CarService.getCars();
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch car" });
    }
  },

  async getCarById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const car = await CarService.getCarById(id);
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

      await CarService.updateCar(id, carUpdates);
      res.status(200).json({ message: "Car updated successfully" });
    } catch (error) {
      console.error("Error updating car:", error);
      res.status(500).json({ error: "Failed to update car" });
    }
  },

  async deleteCar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await CarService.deleteCar(id);
      res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
      console.error("Error deleting car:", error);
      res.status(500).json({ error: "Failed to delete car" });
    }
  }
};
