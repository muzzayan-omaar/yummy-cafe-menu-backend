import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuItem from "./models/MenuItem.js";

dotenv.config();

const seedMenu = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // clear old menu
    await MenuItem.deleteMany();

    // insert new menu
    await MenuItem.insertMany([
      {
        name: "Spanish Latte",
        desc: "Sweet creamy coffee",
        price: 18,
        category: "Coffee",
        img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569",
        isTopSeller: true,
        isSpecial: true,
      },
      {
        name: "Cappuccino",
        desc: "Rich espresso with foam",
        price: 15,
        category: "Coffee",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      },
      {
        name: "Margherita Pizza",
        desc: "Classic cheese pizza",
        price: 30,
        category: "Pizza",
        img: "https://images.unsplash.com/photo-1601924928586-6b4f3c3c9b3c",
        isTopSeller: true,
      },
      {
        name: "Acai Bowl",
        desc: "Fresh acai with fruits",
        price: 25,
        category: "Desserts",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        isSpecial: true,
      },
      {
        name: "Iced Tea",
        desc: "Refreshing cold tea",
        price: 12,
        category: "Cold Drinks",
        img: "https://images.unsplash.com/photo-1497534446932-c925b458314e",
      },
    ]);

    console.log("✅ Menu seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedMenu();