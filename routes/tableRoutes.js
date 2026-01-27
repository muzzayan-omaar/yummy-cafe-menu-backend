import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
  items: [{
    id: String,
    title: String,
    price: Number,
    qty: Number,
    opts: Object
  }],
  total: { type: Number, default: 0 },
  status: { type: String, enum: ['open','paid'], default: 'open' },
  posOrderId: { type: String } // for future POS integration
}, { timestamps: true });

export default mongoose.model("Order", OrderSchema);
