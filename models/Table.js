import mongoose from "mongoose";

const TableSchema = new mongoose.Schema({
  cafeId: { type: String, required: true },
  tableNumber: { type: Number, required: true },
  qrCodeId: { type: String }, // optional unique QR identifier
  status: { type: String, enum: ['open','paid'], default: 'open' }
}, { timestamps: true });

export default mongoose.model("Table", TableSchema);
