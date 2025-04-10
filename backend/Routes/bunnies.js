import express from "express";
import {getBunnies, createBunny, updateBunny, deleteBunny} from "../Controllers/bunnies.js"

const router = express.Router();
router.get("/", getBunnies);
router.post("/", createBunny);
router.put("/:id", updateBunny);
router.delete("/:id", deleteBunny);

export default router;