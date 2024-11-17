import { Router } from "express";
import { carController } from "../controllers/carController";

const router = Router();
router.get("/cars", carController.getCars);
router.post("/cars", carController.createCar);
router.get("/cars/:id", carController.getCarById);
router.put("/cars/:id", carController.updateCar);
router.delete("/cars/:id", carController.deleteCar);

export default router;
