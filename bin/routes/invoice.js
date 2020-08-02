const express = require('express');
const router = express.Router();
const invoiceController = require('../controller/invoice');
const productController = require('../controller/products');

const middleware = require('../middleware/auth');
const { checkAdmin } = require('../middleware/auth');


// router.get('/getInvoice', invoiceController.getInvoice);

router.get('/getInvoice', async(req, res) => {
    let invoice = await invoiceController.getInvoice();
    // console.log(invoice);
    if (req.query.status) {
        res.render('TotalInvoice', { data: invoice, status: req.query.status, message: req.query.message });
    } else {
        res.render('TotalInvoice', { data: invoice, status: 'empty' });

    }

});


router.get('/invoice/:id', async(req, res) => {
    let invoice = await invoiceController.getInvoiceByID(req.params.id);
    // console.log(invoice);
    if (req.query.status) {
        res.render('invoice', { data: invoice, status: req.query.status, message: req.query.message, domain: process.env.DOMAIN });
    } else {
        res.render('invoice', { data: invoice, status: 'empty', domain: process.env.DOMAIN });

    }

});
router.post('/update', invoiceController.updateInvoice);
router.post('/close', invoiceController.closeInvoice);

module.exports = router;