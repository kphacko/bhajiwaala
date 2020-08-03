const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');
const productController = require('../controller/products');

const middleware = require('../middleware/auth');
const { checkAdmin } = require('../middleware/auth');
// const superagent = require('superagent');


//some action to get products
router.get('/getOrder', orderController.getOrder);
router.get('/getOrder/:date', async(req, res) => {
    // console.log(req.params.date);
    let orders = await orderController.getOrderByDate(req.params.date);
    // console.log(orders.length);
    // res.status(200).send(orders);
    if (orders.length === 0) {
        // console.log('sd');
        res.send([]);
    } else {
        res.render('TotalOrders', { data: orders });

    }
});
router.get('/getHotelOrders/:id', async(req, res) => {

    let orders = await orderController.getOrderByHotel(req.params.id);
    // console.log(orders);
    if (orders.length === 0) {

        res.render('HotelOrders', { data: orders, status: 'empty' });

    } else {
        res.render('HotelOrders', { data: orders, status: 'order' });


    }
});

router.get('/getHotelOrder', async(req, res) => {

    let orders = await orderController.getOrderByDateHotel(req.query.date, req.query.id);

    // console.log(orders);
    res.render('viewHotelOrder', {
        data: orders
    });

});
//some action to add product
router.post('/addOrder', orderController.addOrder);

//ejs route
router.get('/addOrder', async(req, res) => {
    let product = await productController.getProducts();
    // console.log(product);
    if (req.query.status) {
        res.render('createOrder', { data: product, status: req.query.status, message: req.query.message, domain: process.env.DOMAIN });

    } else {
        res.render('createOrder', { data: product, status: 'empty', domain: process.env.DOMAIN });

    }


});

//ejs route
router.get('/totalOrder', (req, res) => {
    res.render('totalOrder', { domain: process.env.DOMAIN });
});


//ejs route

router.get('/selectOrder', async(req, res) => {
    let orders = await orderController.getOrder();
    // console.log(orders);
    if (req.query.status) {
        res.render('selectOrder', { data: orders, status: req.query.status, message: req.query.message });

    } else {
        res.render('selectOrder', { data: orders, status: 'empty' });
    }
});

router.get('/editOrder/:id', async(req, res) => {
    let orders = await orderController.getOrderById(req.params.id);
    let product = await productController.getProducts();
    // console.log(orders[0].products);
    res.render('editOrder', { id: req.params.id, data: orders, data1: product });

});

// some action to edit order
router.post('/editOrder', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, orderController.editOrder);

// //some action to delete order 
router.get('/deleteOrder/:id', orderController.deleteOrder);


//route to create purchase
router.get('/addPurchase', async(req, res) => {
    let product = await productController.getProducts();
    // console.log(product);
    if (req.query.status) {
        res.render('purchase', { data: product, status: req.query.status, message: req.query.message, domain: process.env.DOMAIN });

    } else {
        res.render('purchase', { data: product, status: 'empty', domain: process.env.DOMAIN });

    }


});

router.get('/getPurchase/:date', async(req, res) => {
    // console.log(req.params.date);
    let orders = await orderController.getPurchaseByDate(req.params.date);
    // console.log(orders);
    // res.status(200).send(orders);
    if (orders.length === 0) {
        // console.log('sd');
        res.send([]);
    } else {
        res.render('TotalPurchases', { data: orders });

    }
});

router.post('/addPurchase', orderController.addPurchase);


router.get('/totalPurchase', (req, res) => {
    res.render('totalPurchase', { domain: process.env.DOMAIN });
});

router.get('/selectPurchase', async(req, res) => {
    let orders = await orderController.getPurchase();
    // console.log(orders);
    if (req.query.status) {
        res.render('selectPurchase', { data: orders, status: req.query.status, message: req.query.message });

    } else {
        res.render('selectPurchase', { data: orders, status: 'empty' });
    }
});

router.get('/editPurchase/:id', async(req, res) => {
    let orders = await orderController.getPurchaseById(req.params.id);
    let product = await productController.getProducts();
    // console.log(orders);
    res.render('editPurchase', { id: req.params.id, data: orders, data1: product });

});

// some action to edit order
router.post('/editPurchase', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, orderController.editPurchase);

// // //some action to delete order 
router.get('/deletePurchase/:id', orderController.deletePurchase);




router.get('/getVendorOrders/:id', async(req, res) => {

    let orders = await orderController.getOrderByVendor(req.params.id);
    // console.log(orders);
    if (orders.length === 0) {

        res.render('vendorOrders', { data: orders, status: 'empty' });

    } else {
        res.render('vendorOrders', { data: orders, status: 'order' });


    }
});

router.get('/getVendorOrder', async(req, res) => {

    let orders = await orderController.getOrderByDateVendor(req.query.date, req.query.id);

    // console.log(orders);
    res.render('viewVendorOrder', {
        data: orders
    });

});



router.post('/addExpense', orderController.addExpense);

//ejs route
router.get('/addExpense', async(req, res) => {

    // console.log(product);
    if (req.query.status) {
        res.render('createExpense', { status: req.query.status, message: req.query.message, domain: process.env.DOMAIN });

    } else {
        res.render('createExpense', { status: 'empty', domain: process.env.DOMAIN });

    }


});

router.get('/select', async(req, res) => {
    let expense = await orderController.getExpense();
    if (req.query.status) {
        res.render('selectExpense', { data: expense, status: req.query.status, message: req.query.message });
    } else {
        res.render('selectExpense', { data: expense, status: 'empty' });

    }
});
router.post('/editExpense', orderController.editExpense);

router.get('/editexpense/:id', async(req, res) => {
    let expense = await orderController.getExpenseByID(req.params.id);
    if (req.query.status) {
        res.render('editExpense', { data: expense, status: req.query.status, message: req.query.message });
    } else {
        res.render('editExpense', { data: expense, status: 'empty' });
    }
});
router.get('/deleteExpense/:id', orderController.deleteExpense);

module.exports = router;