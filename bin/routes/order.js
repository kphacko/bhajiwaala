const express = require('express');
const router = express.Router();
const userController = require('../controller/order');

//some action to get products
router.get('/getOrder/:id', userController.getOrder);
//some action to add product
router.post('/addOrder', userController.addOrder);
router.get('/addOrder', (req, res) => {
    res.render('createOrder');
});
router.get('/totalOrder', (req, res) => {
    res.render('totalOrder');
});
//some action to edit product
// router.patch('/editOrder', userController.editOrder);

// //some action to delete product 
// router.delete('/deleteOrder/:id', userController.deleteOrder);

module.exports = router;