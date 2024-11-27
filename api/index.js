import express from "express";
import cors from "cors";
import userRoutes from "../routes/userRoutes.js";
import expenseRoutes from "../routes/expenseRoutes.js";
import categoryRoutes from "../routes/categoryRoutes.js";
import authRoutes from "../routes/authRoutes.js";
import dotenv from 'dotenv';

dotenv.config();

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

console.log(CLIENT_URL)
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.get("/", (req, res) => {
  res.send("Budget Control API");
});
app.use("/api", userRoutes);
app.use("/api", expenseRoutes);
app.use("/api", categoryRoutes);
app.use("/api", authRoutes);  

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("Link: http://localhost:3000/");
});

export default app;
