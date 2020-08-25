const express = require('express');
const router = express.Router();
const invoiceController = require('../controller/invoice');
const productController = require('../controller/products');

const middleware = require('../middleware/auth');
const { checkAdmin } = require('../middleware/auth');


// router.get('/getInvoice', invoiceController.getInvoice);


router.get('/getInvoice', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let invoice = await invoiceController.getInvoice();
    // console.log(invoice);
    if (req.query.status) {
        res.render('totalInvoice', { data: invoice, status: req.query.status, message: req.query.message, role: req.session.role });
    } else {
        res.render('totalInvoice', { data: invoice, status: 'empty', role: req.session.role });

    }

});


router.get('/invoice/:id', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let invoice = await invoiceController.getInvoiceByID(req.params.id);
    // console.log(invoice);
    if (req.query.status) {
        res.render('invoice', { data: invoice, status: req.query.status, message: req.query.message, domain: process.env.DOMAIN, role: req.session.role });
    } else {
        res.render('invoice', { data: invoice, status: 'empty', domain: process.env.DOMAIN, role: req.session.role });

    }

});

router.get('/expense', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let invoice = await invoiceController.getExpenseInvoice();

    // console.log(invoice);

    res.render('expenseInvoice', { data: invoice, status: 'empty', domain: process.env.DOMAIN });
});
router.get('/expense/:id', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let invoice = await invoiceController.getExpenseInvoiceByID(req.params.id);

    // console.log(invoice);

    res.render('EditexpenseInvoice', { data: invoice, status: 'empty', domain: process.env.DOMAIN, role: req.session.role });
});
router.post('/update', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, invoiceController.updateInvoice);
router.post('/close', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, invoiceController.closeInvoice);

router.post('/updateExpense', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, invoiceController.updateInvoiceExpense);
router.post('/closeExpense', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, invoiceController.closeInvoiceExpense);


module.exports = router;