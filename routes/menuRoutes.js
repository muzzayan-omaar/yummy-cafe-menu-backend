import express from "express";
import { getMenu, addMenuItem, seedMenu } from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getMenu);
router.post("/", addMenuItem);

// NEW: seed route
router.post("/seed", seedMenu);

export default router;
