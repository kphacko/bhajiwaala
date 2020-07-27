const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');
const productController = require('../controller/products');

const middleware = require('../middleware/auth');
const { checkAdmin } = require('../middleware/auth');
const superagent = require('superagent');


//some action to get products
router.get('/getOrder', orderController.getOrder);

//some action to add product
router.post('/addOrder', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, orderController.addOrder);

//ejs route
router.get('/addOrder', async(req, res) => {
    let product = await productController.getProducts();
    // console.log(product);
    res.render('createOrder', { data: product });

});

//ejs route
router.get('/totalOrder', (req, res) => {
    res.render('totalOrder');
});

//ejs route

router.get('/selectOrder', async(req, res) => {
    let orders = await orderController.getOrder();
    // console.log(orders);
    res.render('selectOrder', { data: orders });

});

router.get('/editOrder/:id', async(req, res) => {
    let orders = await orderController.getOrderById(req.params.id);
    let product = await productController.getProducts();

    res.render('editOrder', { id: req.params.id, data: orders, data1: product });

});

// some action to edit order
router.post('/editOrder', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, orderController.editOrder);

// //some action to delete order 
router.get('/deleteOrder/:id', orderController.deleteOrder);

module.exports = router;