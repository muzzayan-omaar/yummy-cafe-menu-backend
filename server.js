import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import adminRoutes from "./routes/adminRoutes.js";

import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
app.use("/api/tables", tableRoutes);

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());   // ⬅️ REQUIRED
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use("/admin", adminRoutes);

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

app.use("/api/tables", tableRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
