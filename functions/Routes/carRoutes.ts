import { Router } from "express";
import { CarController } from "../controllers/carController";

const router = Router();

router.post("/addCar", CarController.createCar);
router.get("/getCars", CarController.getCars);
router.get("/getCar/:id", CarController.getCarById);
router.put("/updateCar/:id", CarController.updateCar);
router.delete("/deleteCar/:id", CarController.deleteCar);

export default router;
