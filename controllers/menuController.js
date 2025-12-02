import MenuItem from "../models/MenuItem.js";
import SAMPLE_ITEMS from "../data/sampleItems.js"; // we can create this file

// GET /api/menu
export const getMenu = async (req, res) => {
  try {
    const items = await MenuItem.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu" });
  }
};

// POST /api/menu
export const addMenuItem = async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    await item.save();
    res.json({ message: "Item added", item });
  } catch (error) {
    res.status(500).json({ error: "Failed to add item" });
  }
};

// POST /api/menu/seed
export const seedMenu = async (req, res) => {
  try {
    await MenuItem.deleteMany({}); // optional: clear existing items
    const created = await MenuItem.insertMany(SAMPLE_ITEMS);
    res.json({ message: "Menu seeded", items: created });
  } catch (error) {
    res.status(500).json({ error: "Failed to seed menu" });
  }
};
