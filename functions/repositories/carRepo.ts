import { firestore } from "../config/firebaseConfig";
import { Car } from "../Interfaces/carInterface";

const collectionRef = firestore.collection("cars");

export const CarRepository = {
  async addCar(car: Car): Promise<Car> {
    const newDoc = await collectionRef.add(car);
    const carWithId = { id: newDoc.id, ...car };
    await newDoc.update(carWithId);

    return carWithId;
  },

};