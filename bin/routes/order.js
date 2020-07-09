const express = require('express');
const router = express.Router();
const userController = require('../controller/order');
const middleware = require('../middleware/auth');
const { checkAdmin } = require('../middleware/auth');
const superagent = require('superagent');


//some action to get products
router.get('/getOrder/:id', userController.getOrder);
//some action to add product
router.post('/addOrder', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, userController.addOrder);
router.get('/addOrder', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, (req, res) => {

    // callback
    superagent
        .get('http://localhost:3000/products/getProducts/all')
        .set('accept', 'json')
        .end((err, result) => {
            if (!err) {
                let data = JSON.parse(result.text);
                // console.log(data);
                res.render('createOrder', { data: data.details, status: req.params.status });
            } else {
                res.render('index');
            }

            // Calling the end function will send the request
        });


});
router.get('/totalOrder', (req, res) => {
    res.render('totalOrder');
});
router.get('/editOrder', (req, res) => {
    res.render('editOrder');
});

//some action to edit product
// router.patch('/editOrder', userController.editOrder);

// //some action to delete product 
// router.delete('/deleteOrder/:id', userController.deleteOrder);

module.exports = router;