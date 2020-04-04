const express = require('express');
const { productController } = require('../controller');
const router = express.Router();

router.get('/getallproduct', productController.getAllProducts)
router.get('/getproductlaptop', productController.getProductLaptop)
router.get('/getproductaksesoris', productController.getProductAksesoris)
router.get('/getproducthandphone', productController.getProductHandphone)
router.delete('/deleteproduct/:id', productController.deleteProduct)
router.put('/editproduct/:id', productController.editProduct)
router.post('/addproduct', productController.addProduct)

module.exports = router;