import express from "express";
import {
  getMenu,
  addMenuItem,
  seedMenu,
  updateMenuItem,
  deleteMenuItem,
} from "../controllers/menuController.js";
import { verifyAdminToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public route: anyone can view menu
router.get("/", getMenu);

// Protected route: only logged-in admins can add items
router.post("/", verifyAdminToken, addMenuItem);

// Protected route for seeding (optional)
router.post("/seed", verifyAdminToken, seedMenu);

// Protected route: update an item
router.put("/:id", verifyAdminToken, updateMenuItem);

// Protected route: delete an item
router.delete("/:id", verifyAdminToken, deleteMenuItem);

export default router;
