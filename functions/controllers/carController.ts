import { Request, Response } from "express";
import { CarService } from "../services/CarService";
import { Car } from "../Interfaces/carInterface";

export const CarController = {
  async createCar(req: Request, res: Response): Promise<void> {
    try {
      // Lee los datos del coche desde el cuerpo de la solicitud
      const car: Car = {
        model: req.body.model as string,
        color: req.body.color as string,
        owner: req.body.owner as string,
        year: req.body.year as number,
      };

      // Llama al servicio para agregar el coche a la base de datos
      const addCar = await CarService.addCar(car);
      res.status(200).json(addCar);
    } catch (error) {
      console.error("Error adding car document:", error);
      res.status(500).json({ error: "Failed to add car document" });
    }
  }
};
