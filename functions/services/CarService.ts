import { Car } from "../Interfaces/carInterface";
import { CarRepository } from "../repositories/carRepo";

export const CarService = {

    async addCar(car: Car): Promise<Car> {
        const newDoc = await CarRepository.addCar(car);
        return newDoc;
      },
};
