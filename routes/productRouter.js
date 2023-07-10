const productController = require("../controllers/productController");

const router = require("express").Router();

router.post("/addProduct", productController.addNewProduct);

router.get("/allProduct", productController.getAllProducts);

router.get("/:id", productController.getSingleProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.removeProduct);

module.exports = router;
