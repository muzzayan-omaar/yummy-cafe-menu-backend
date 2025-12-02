import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
        name: String,
        price: Number,
        qty: Number,
      },
    ],
    total: Number,
    customerName: String,
    phone: String,
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
