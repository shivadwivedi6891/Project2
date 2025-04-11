import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import patientRoutes from "./routes/patientRoutes.js";



// Route imports (next step)
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/patient", patientRoutes);

// Connect to DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("👋 LifeLine backend running!");
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
