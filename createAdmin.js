import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

dotenv.config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const username = "admin";
    const email = "admin@yummy.com";
    const password = "123456";

    const hashedPassword = await bcrypt.hash(password, 10);

    // Update if exists, otherwise insert
    const result = await Admin.updateOne(
      { username },
      { $set: { email, password: hashedPassword } },
      { upsert: true }
    );

    if (result.upsertedCount > 0) {
      console.log("Admin created!");
    } else {
      console.log("Admin updated!");
    }

    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
};

run();
