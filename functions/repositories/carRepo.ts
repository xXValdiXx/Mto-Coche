import { firestore } from "../config/firebaseConfig";
import { Car } from "../interfaces/carInterface";
import { CarQueryOptions } from "../interfaces/carQueryInterface";

const collectionRef = firestore.collection("cars");

export const carRepository = {
  async addCar(car: Car): Promise<Car> {
    const newDoc = await collectionRef.add(car);
    return { id: newDoc.id, ...car };
  },

  async getCars(option: CarQueryOptions): Promise<Car[]> {
    let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = collectionRef;

    // Aplica los filtros si se proporcionan
    if (option?.color) {
      query = query.where("color", "==", option.color);
    }
    if (option?.year) {
      query = query.where("year", "==", option.year);
    }
    if (option?.services) {
      query = query.where("services", "array-contains", option.services);
    }

    // Ejecuta la consulta
    const snapshot = await query.get();

    if (snapshot.empty) return [];

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Car[];
  },

  async getCarById(id: string): Promise<Car | null> {
    const doc = await collectionRef.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as Car;
  },

  async updateCar(id: string, car: Car): Promise<void> {
    await collectionRef.doc(id).set(car);
  },
  
  async deleteCar(id: string): Promise<void> {
    await collectionRef.doc(id).delete();
  }
};
