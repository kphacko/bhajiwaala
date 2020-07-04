const express = require('express');
const router = express.Router();
const userController = require('../controller/order');

//some action to get products
router.get('/getOrder/:id', userController.getOrder);

//some action to add hotel
router.post('/addOrder', userController.addOrder);

// //some action to edit hotel
// router.patch('/editOrder', userController.editOrder);

// //some action to delete hotel 
// router.delete('/deleteOrder/:id', userController.deleteOrder);

module.exports = router;