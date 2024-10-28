import { firestore } from "../config/firebaseConfig";
import { Car } from "../Interfaces/carInterface";

const collectionRef = firestore.collection("cars");

export const CarRepository = {
  async addCar(car: Car): Promise<Car> {
    const newDoc = await collectionRef.add(car);
    return { id: newDoc.id, ...car };
  },

};