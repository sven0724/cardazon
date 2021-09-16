const express = require("express");
const router = express.Router();

const productController = require("../../controllers/ProductController");

router.post("/", productController.addProduct);

router.put("/:id", productController.updateProduct);

router.get("/get/:category", productController.getProduct);

module.exports = router;