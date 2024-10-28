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
};
