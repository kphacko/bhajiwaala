const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');
const productController = require('../controller/products');
const functions = require('../custom/function');

const middleware = require('../middleware/auth');
const { checkAdmin } = require('../middleware/auth');
// const superagent = require('superagent');


//some action to get products
router.get('/OrderSummary',orderController.getOrderSum);
router.get('/ViewOrderSummary',async(req,res)=>{
    try {
        

        if (!req.query.date1 || !req.query.date2 || !req.query.id ||!req.query.type) {  
            console.log(req.query.date1+' '+ req.query.date2 +' '+req.query.id +' '+req.query.type);
            // res.redirect('/order/HotelSummary')
        }else{
            let orders = await orderController.getOrderSumby(req.query.date1,req.query.date2,req.query.id,req.query.type);
            let data;
        //    console.log(orders);
            if (req.query.type === 'HOTEL') {
            data = await functions.querySingle(`SELECT * FROM hotel WHERE id=${orders[0].ref_id}`);
            }else if (req.query.type === 'VENDOR') {
            data = await functions.querySingle(`SELECT * FROM vendor WHERE id=${orders[0].ref_id}`);
                
            }else{
            throw 'Error';
            }
            
            res.render('OrderSum',{orders:orders,data:data,role: req.session.role,org:req.session.org ,date:`${req.query.date1} To ${req.query.date2}`});
        }


    } catch (error) {
        res.redirect('/order/OrderSummary');
    }
  

});

router.get('/getOrder', orderController.getOrder);
router.get('/getOrder/:date', async(req, res) => {
    // console.log(req.params.date);
    let orders = await orderController.getOrderByDate(req.params.date);
    let product = await productController.getProducts();
    // console.log(orders);
    // res.status(200).send(orders);
    if (orders.length === 0) {
        // console.log('sd');
        res.send([]);
    } else {
        res.render('TotalOrders', { data: orders ,product:product, role: req.session.role});

    }
});
router.get('/getHotelOrders/:id', async(req, res) => {

    let orders = await orderController.getOrderByHotel(req.params.id);
    // console.log(orders);
    if (orders.length === 0) {

        res.render('hotelOrders', { data: orders, status: 'empty', role: req.session.role });

    } else {
        res.render('hotelOrders', { data: orders, status: 'order', role: req.session.role });


    }
});

router.get('/getHotelOrder', async(req, res) => {

    let orders = await orderController.getOrderByDateHotel(req.query.date, req.query.id);

    // console.log(orders);
    res.render('viewHotelOrder', {
        data: orders,
        role: req.session.role
    });

});
//some action to add product
router.post('/addOrder', orderController.addOrder);

//ejs route
router.get('/addOrder', async(req, res) => {
    let product = await productController.getProducts();
    // console.log(product);
    if (req.query.status) {
        res.render('createOrder', { data: product, status: req.query.status, message: req.query.message, domain: process.env.DOMAIN, role: req.session.role });

    } else {
        res.render('createOrder', { data: product, status: 'empty', domain: process.env.DOMAIN, role: req.session.role });

    }


});

//ejs route
router.get('/totalOrder', (req, res) => {
    res.render('totalOrder', { domain: process.env.DOMAIN, role: req.session.role });
});

router.get('/HotelSummary', (req, res) => {
    res.render('HotelSummary', { domain: process.env.DOMAIN, role: req.session.role });
});

router.get('/VendorSummary', (req, res) => {
    res.render('VendorSummary', { domain: process.env.DOMAIN, role: req.session.role });
});
//ejs route

router.get('/selectOrder', async(req, res) => {
    let orders = await orderController.getOrder();
    // console.log(orders);
    if (req.query.status) {
        res.render('selectOrder', { data: orders, status: req.query.status, message: req.query.message, role: req.session.role });

    } else {
        res.render('selectOrder', { data: orders, status: 'empty', role: req.session.role });
    }
});

router.get('/editOrder/:id', async(req, res) => {
    let orders = await orderController.getOrderById(req.params.id);
    let product = await productController.getProducts();
    // console.log(orders[0].products);
    res.render('editOrder', { id: req.params.id, data: orders, data1: product, role: req.session.role });

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
        res.render('purchase', { data: product, status: req.query.status, message: req.query.message, domain: process.env.DOMAIN, role: req.session.role });

    } else {
        res.render('purchase', { data: product, status: 'empty', domain: process.env.DOMAIN, role: req.session.role });

    }


});

router.get('/getPurchase/:date', async(req, res) => {
    // console.log(req.params.date);
    let orders = await orderController.getPurchaseByDate(req.params.date);
    let product = await productController.getProducts();
    // console.log(orders);
    // res.status(200).send(orders);
    if (orders.length === 0) {
        // console.log('sd');
        res.send([]);
    } else {
        res.render('TotalPurchases', { data: orders,product:product, role: req.session.role });

    }
});

router.post('/addPurchase', orderController.addPurchase);


router.get('/totalPurchase', (req, res) => {
    res.render('totalPurchase', { domain: process.env.DOMAIN, role: req.session.role });
});

router.get('/selectPurchase', async(req, res) => {
    let orders = await orderController.getPurchase();
    // console.log(orders);
    if (req.query.status) {
        res.render('selectPurchase', { data: orders, status: req.query.status, message: req.query.message, role: req.session.role });

    } else {
        res.render('selectPurchase', { data: orders, status: 'empty', role: req.session.role });
    }
});

router.get('/editPurchase/:id', async(req, res) => {
    let orders = await orderController.getPurchaseById(req.params.id);
    let product = await productController.getProducts();
    // console.log(orders);
    res.render('editPurchase', { id: req.params.id, data: orders, data1: product, role: req.session.role });

});

// some action to edit order
router.post('/editPurchase', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, orderController.editPurchase);

// // //some action to delete order 
router.get('/deletePurchase/:id', orderController.deletePurchase);




router.get('/getVendorOrders/:id', async(req, res) => {

    let orders = await orderController.getOrderByVendor(req.params.id);
    // console.log(orders);
    if (orders.length === 0) {

        res.render('vendorOrders', { data: orders, status: 'empty', role: req.session.role });

    } else {
        res.render('vendorOrders', { data: orders, status: 'order', role: req.session.role });


    }
});

router.get('/getVendorOrder', async(req, res) => {

    let orders = await orderController.getOrderByDateVendor(req.query.date, req.query.id);

    // console.log(orders);
    res.render('viewVendorOrder', {
        data: orders,
        role: req.session.role
    });

});



router.post('/addExpense', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, orderController.addExpense);

//ejs route
router.get('/addExpense', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {

    // console.log(product);
    if (req.query.status) {
        res.render('createExpense', { status: req.query.status, message: req.query.message, domain: process.env.DOMAIN, role: req.session.role });

    } else {
        res.render('createExpense', { status: 'empty', domain: process.env.DOMAIN, role: req.session.role });

    }


});

router.get('/select', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let expense = await orderController.getExpense();
    if (req.query.status) {
        res.render('selectExpense', { data: expense, status: req.query.status, message: req.query.message, role: req.session.role });
    } else {
        res.render('selectExpense', { data: expense, status: 'empty', role: req.session.role });

    }
});
router.post('/editExpense', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, orderController.editExpense);

router.get('/editexpense/:id', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let expense = await orderController.getExpenseByID(req.params.id);
    if (req.query.status) {
        res.render('editExpense', { data: expense, status: req.query.status, message: req.query.message, role: req.session.role });
    } else {
        res.render('editExpense', { data: expense, status: 'empty', role: req.session.role });
    }
});
router.get('/deleteExpense/:id', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, orderController.deleteExpense);

module.exports = router;