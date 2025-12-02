import Order from "../models/Order.js";

// POST /api/orders
export const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: "Order placed", order });
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

// GET /api/orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};
