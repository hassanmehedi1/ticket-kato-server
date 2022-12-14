import express from "express"
import { createBuses, deleteBuses, getAllBuses, getBuses, getBusesSeats, updateBuses } from "../controllers/controller_buses.js";
const router=express.Router();

//CREATE of buses
router.post("/", createBuses);

//UPDATE
router.put("/:id", updateBuses);

//DELETE
router.delete("/:id", deleteBuses)

//GET
router.get("/:id",getBuses)

//GET ALL
router.get("/", getAllBuses)

router.get("/seats/:id", getBusesSeats);


export default router;