import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Happy Bites API is running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});