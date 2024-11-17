import { Car } from "../interfaces/carInterface";
import { carRepository } from "../repositories/carRepo";
import { CarQueryOptions } from "../interfaces/carQueryInterface";

export const carService = {

  async addCar(car: Car): Promise<Car> {
    const newDoc: Car = await carRepository.addCar(car);
    return newDoc;
  },

  async getCars(payload: CarQueryOptions): Promise<Car[]> {
    return await carRepository.getCars(payload);
  },

  async getCarById(id: string): Promise<Car | null> {
    return await carRepository.getCarById(id);
  },

  async updateCar(id: string, car: Car): Promise<void> {
    await carRepository.updateCar(id, car);
  },
  
  async deleteCar(id: string): Promise<void> {
    await carRepository.deleteCar(id);
  }
};

