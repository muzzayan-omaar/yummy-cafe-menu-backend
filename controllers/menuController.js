import MenuItem from "../models/MenuItem.js";
import SAMPLE_ITEMS from "../data/sampleItems.js";

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

// PUT /api/menu/:id
export const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await MenuItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item updated", item: updatedItem });
  } catch (error) {
    res.status(500).json({ error: "Failed to update item" });
  }
};

// DELETE /api/menu/:id
export const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await MenuItem.findByIdAndDelete(id);
    if (!deletedItem) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item" });
  }
};

// POST /api/menu/seed
export const seedMenu = async (req, res) => {
  try {
    await MenuItem.deleteMany({});
    const created = await MenuItem.insertMany(SAMPLE_ITEMS);
    res.json({ message: "Menu seeded", items: created });
  } catch (error) {
    res.status(500).json({ error: "Failed to seed menu" });
  }
};
