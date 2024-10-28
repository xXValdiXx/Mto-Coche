import { Request, Response } from "express";
import { CarService } from "../services/CarService";
import { Car } from "../Interfaces/carInterface";

export const CarController = {
  async createCar(req: Request, res: Response): Promise<void> {
    try {
      // Lee los datos del coche desde el cuerpo de la solicitud
      const car: Car = {
        model: req.body.model,
        color: req.body.color,
        owner: req.body.owner,
        year: req.body.year,
      };

      // Llama al servicio para agregar el coche a la base de datos
      const id = await CarService.addCar(car);
      res.status(200).json({ id, message: "Car document added successfully" });
    } catch (error) {
      console.error("Error adding car document:", error);
      res.status(500).json({ error: "Failed to add car document" });
    }
  }
};
