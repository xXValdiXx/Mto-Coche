import { Router } from "express";
import { CarController } from "../controllers/carController";

const router = Router();

router.post("/addCar", CarController.createCar);
router.get("/getCars", CarController.getCars);

export default router;
