// productController.js
const Product = require("./productModel");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { productName, price, category } = req.body;

    // Validation
    if (!productName || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.create({ productName, price, category });
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
