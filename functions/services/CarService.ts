import { Car } from "../Interfaces/carInterface";
import { CarRepository } from "../repositories/carRepo";

export const CarService = {

  async addCar(car: Car): Promise<Car> {
    const newDoc: Car = await CarRepository.addCar(car);
    return newDoc;
  },

  async getCars(): Promise<Car[]> {
    return await CarRepository.getCars();
  }
};
