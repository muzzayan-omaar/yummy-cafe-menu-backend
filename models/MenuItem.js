import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    img: { type: String },
    isAvailable: {
  type: Boolean,
  default: true,
},
    isTopSeller: {
  type: Boolean,
  default: false,
},
    tags: [{ type: String }],

      isSpecial: {
    type: Boolean,
    default: false,
  },
  },
  { timestamps: true }
);

export default mongoose.model("MenuItem", menuItemSchema);
