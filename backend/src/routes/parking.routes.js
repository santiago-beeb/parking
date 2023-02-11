import { Router } from "express";
import { methods as parkingController } from "../controllers/parking.controller";

const router = Router();

router.get("/", parkingController.getParking);
//router.get("/:placa", parkingController.getPlaca);
router.delete("/:id", parkingController.deletePark);
router.put("/:id", parkingController.updatePark);
router.get("/:id", parkingController.getPark);
router.post("/", parkingController.addParking);

export default router;
