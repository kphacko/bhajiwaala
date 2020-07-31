const express = require('express');
const router = express.Router();
const userController = require('../controller/products');

//some action to get products 
router.get('/getProducts/:id', userController.getProducts);

//some action to add hotel 
router.post('/addProducts', userController.addProducts);




router.get('/addProducts', (req, res) => {
    if (req.query.status) {
        res.render('addProduct', { status: req.query.status, message: req.query.message });

    } else {
        res.render('addProduct', { status: 'empty' });
    }
});

//some action to edit hotel 
router.post('/editProducts', userController.editProducts);

router.get('/editProduct/:id', async(req, res) => {
    if (req.params.id) {
        let products = await userController.getProductById(req.params.id);
        res.render('editProduct', { product: products })
    } else {
        res.redirect('/');
    }

});

router.get('/editProducts', async(req, res) => {
    let products = await userController.getProducts();
    // console.log(orders);
    if (req.query.status) {
        res.render('editProducts', { Product: products, status: req.query.status, message: req.query.message });

    } else {
        res.render('editProducts', { Product: products, status: 'empty' });
    }
});

//some action to delete hotel 
router.get('/deleteProduct/:id', userController.deleteProducts);

module.exports = router;