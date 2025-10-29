// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./productRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// Routes
app.use("/products", productRouter);

// Start Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running successfully on port ${PORT}`);
});
