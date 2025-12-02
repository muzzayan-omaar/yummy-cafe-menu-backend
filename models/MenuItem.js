import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    img: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("MenuItem", menuItemSchema);
