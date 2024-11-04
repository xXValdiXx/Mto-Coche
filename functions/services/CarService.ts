import { Car } from "../Interfaces/carInterface";
import { CarRepository } from "../repositories/carRepo";

export const CarService = {

  async addCar(car: Car): Promise<Car> {
    const newDoc: Car = await CarRepository.addCar(car);
    return newDoc;
  },

  async getCars(): Promise<Car[]> {
    return await CarRepository.getCars();
  },

  async getCarById(id: string): Promise<Car | null> {
    return await CarRepository.getCarById(id);
  },

  async updateCar(id: string, car: Car): Promise<void> {
    await CarRepository.updateCar(id, car);
  },
  
  async deleteCar(id: string): Promise<void> {
    await CarRepository.deleteCar(id);
  }
};
