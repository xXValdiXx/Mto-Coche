import { Car } from "../interfaces/carInterface";
import { CarRepository } from "../repositories/carRepo";

export const CarService = {

    async addCar(car: Car): Promise<Car> {
        const newDoc: Car = await CarRepository.addCar(car);
        return newDoc;
      },
};
