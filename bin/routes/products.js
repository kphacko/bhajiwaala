const express = require('express');
const router = express.Router();
const userController = require('../controller/products');

//some action to get products
router.get('/getProducts/:id', userController.getProducts);

//some action to add hotel
router.post('/addProducts', userController.addProducts);

//some action to edit hotel
router.patch('/editProducts', userController.editProducts);

//some action to delete hotel 
router.delete('/deleteProducts/:id', userController.deleteProducts);

module.exports = router;