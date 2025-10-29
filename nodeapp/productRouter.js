// productRouter.js
const express = require("express");
const router = express.Router();
const { createProduct, getProducts } = require("./productController");

router.post("/", createProduct);
router.get("/", getProducts);

module.exports = router;
