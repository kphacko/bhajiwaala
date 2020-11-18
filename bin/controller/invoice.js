const sql = require('../../connection');
const customError = require('../custom/errors');
const Custom = require('../custom/error');
const { PerformanceObserver, performance } = require('perf_hooks');
const functions = require('../custom/function');



exports.getInvoice = async(type) => {
    try {
        let finalArray;
        if (type === 'hotel') {
        let hotelInvoices = await functions.querySingle(`SELECT invoice.id AS invoiceID,hotel.id,orders.type,hotel.name,orders.date,orders.u_id AS editedBy,invoice.u_id AS createdBy,invoice.date AS gDate,invoice.status,invoice.paid_amount,invoice.TotalPrice FROM orders INNER JOIN invoice ON invoice.ref_id = orders.id INNER JOIN hotel ON hotel.id = orders.ref_id WHERE orders.status != 1 AND orders.type = 'HOTEL' AND invoice.type= 0`);
            finalArray = hotelInvoices;
        }else if (type === 'vendor') {
        let vendorInvoices = await functions.querySingle(`SELECT invoice.id AS invoiceID,vendor.id,orders.type,vendor.name,orders.date,orders.u_id AS editedBy,invoice.u_id AS createdBy,invoice.date AS gDate,invoice.status,invoice.paid_amount,invoice.TotalPrice FROM orders INNER JOIN invoice ON invoice.ref_id = orders.id INNER JOIN vendor ON vendor.id = orders.ref_id WHERE orders.status != 1 AND orders.type = 'VENDOR' AND invoice.type= 1`);
            finalArray = vendorInvoices;
        }
        // console.log(date);
        // let finalArray = hotelInvoices.concat(vendorInvoices);
        return finalArray;
        // res.json(finalArray);
    } catch (error) {
        console.log(error);
    }

}


exports.getInvoiceByID = async(id) => {
    try {
        // console.log(id);
        let hotelInvoices = await functions.querySingle(`SELECT invoice.id AS invoiceID,orders.id AS orderID,hotel.id,orders.type,hotel.name,hotel.email,hotel.phone,orders.date,orders.u_id AS editedBy,invoice.u_id AS createdBy,invoice.date AS gDate,invoice.status,invoice.paid_amount,invoice.TotalPrice FROM orders INNER JOIN invoice ON invoice.ref_id = orders.id INNER JOIN hotel ON hotel.id = orders.ref_id WHERE orders.status != 1 AND orders.type = 'HOTEL' AND invoice.type= 0`);
        let vendorInvoices = await functions.querySingle(`SELECT invoice.id AS invoiceID,orders.id AS orderID,vendor.id,orders.type,vendor.name,vendor.email,vendor.phone,orders.date,orders.u_id AS editedBy,invoice.u_id AS createdBy,invoice.date AS gDate,invoice.status,invoice.paid_amount,invoice.TotalPrice FROM orders INNER JOIN invoice ON invoice.ref_id = orders.id INNER JOIN vendor ON vendor.id = orders.ref_id WHERE orders.status != 1 AND orders.type = 'VENDOR' AND invoice.type= 1`);

        let finalArray = hotelInvoices.concat(vendorInvoices);

        let invoice = finalArray.filter((inv) => {
            // console.log(inv.invoiceID);
            if (parseInt(inv.invoiceID) === parseInt(id)) {
                // console.log(inv.invoiceID);
                return inv;
            }

        });
        let products = await functions.querySingle(`SELECT ordered_products.order_id,ordered_products.p_id,products.name,products.marathi,products.hindi,ordered_products.quantity,ordered_products.price FROM ordered_products INNER JOIN products ON products.id = ordered_products.p_id WHERE ordered_products.order_id = ${invoice[0].orderID}`);
        invoice[0].products = products;

        return invoice;
        // res.json(invoice);
    } catch (error) {
        console.log(error);
    }

}

exports.updateInvoice = async(req, res) => {
    try {
        // console.log(date);
        const { amount, type, id } = req.body;

        if (!amount || amount < 0 || !type || !id) throw customError.dataInvalid;
        let invoice = await functions.querySingle(`SELECT * FROM invoice WHERE id = ${id}`);
        let updateInvoice = await functions.querySingle(`UPDATE invoice SET status = 1,paid_amount =${parseInt(amount)} WHERE id = ${id}`);

        // let updateOrder = await functions.querySingle(`UPDATE orders SET status = 2  WHERE ref_id = ${invoice[0].ref_id} AND type = '${type}'`);

        res.status(200).json({ code: 201, message: 'invoice updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(401).send(error);
    }

}

exports.closeInvoice = async(req, res) => {
    try {
        // console.log(date);
        const { id, type } = req.body;

        if (!id || !type) throw customError.dataInvalid;
        let invoice = await functions.querySingle(`SELECT * FROM invoice WHERE id = ${id}`);
        let updateInvoice = await functions.querySingle(`UPDATE invoice SET status = 2 WHERE id = ${id}`);

        let updateOrder = await functions.querySingle(`UPDATE orders SET status = 2  WHERE ref_id = ${invoice[0].ref_id} AND type = '${type}'`);

        res.status(200).json({ code: 201, message: 'invoice updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(401).send(error);
    }

}


exports.getExpenseInvoice = async() => {
    try {
        // console.log(id);
        let expense = await functions.querySingle(`SELECT invoice.id,invoice.u_id,invoice.status,expense.name,expense.discription,expense.date,invoice.paid_amount,invoice.TotalPrice FROM invoice INNER JOIN expense ON expense.id = invoice.ref_id WHERE invoice.type = 2 AND expense.status != 1`);

        return expense;
        // res.json(invoice);
    } catch (error) {
        console.log(error);
    }

}

exports.getExpenseInvoiceByID = async(id) => {
    try {
        // console.log(id);
        let expense = await functions.querySingle(`SELECT invoice.id,invoice.u_id,invoice.status,expense.name,expense.discription,expense.date,invoice.paid_amount,invoice.TotalPrice FROM invoice INNER JOIN expense ON expense.id = invoice.ref_id WHERE invoice.type = 2 AND invoice.id = ${id}`);
        return expense;
        // res.json(invoice);
    } catch (error) {
        console.log(error);
    }

}


exports.updateInvoiceExpense = async(req, res) => {
    try {
        // console.log(date);
        const { amount, type, id } = req.body;

        if (!amount || amount < 0 || !type || !id) throw customError.dataInvalid;
        let invoice = await functions.querySingle(`SELECT * FROM invoice WHERE id = ${id}`);
        let updateInvoice = await functions.querySingle(`UPDATE invoice SET status = 1,paid_amount =${parseInt(amount)} WHERE id = ${id}`);

        // let updateOrder = await functions.querySingle(`UPDATE orders SET status = 2  WHERE ref_id = ${invoice[0].ref_id} AND type = '${type}'`);

        res.status(200).json({ code: 201, message: 'expense updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(401).send(error);
    }

}

exports.closeInvoiceExpense = async(req, res) => {
    try {
        // console.log(date);
        const { id, type } = req.body;

        if (!id || !type) throw customError.dataInvalid;
        let invoice = await functions.querySingle(`SELECT * FROM invoice WHERE id = ${id}`);
        let updateInvoice = await functions.querySingle(`UPDATE invoice SET status = 2 WHERE id = ${id}`);

        let updateOrder = await functions.querySingle(`UPDATE expense SET status = 2  WHERE id = ${invoice[0].ref_id} `);

        res.status(200).json({ code: 201, message: 'expense Closed successfully' });
    } catch (error) {
        console.log(error);
        res.status(401).send(error);
    }

}