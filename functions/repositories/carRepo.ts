import { firestore } from "../config/firebaseConfig";
import { Car } from "../Interfaces/carInterface";

const collectionRef = firestore.collection("cars");

export const CarRepository = {
  async addCar(car: Car): Promise<Car> {
    const newDoc = await collectionRef.add(car);
    return { id: newDoc.id, ...car };
  },
  async getCars(): Promise<Car[]> {
    const snapshot = await collectionRef.get(); 
    if (snapshot.empty) return [];
  
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Car[];
  }

};