const sql = require('../../connection');
const customError = require('../custom/errors');
const Custom = require('../custom/error');
const { PerformanceObserver, performance } = require('perf_hooks');
const functions = require('../custom/function');
const CustomError = require('../custom/error');


const updateInvoice = async(id, type) => {
    try {
        let totalPrice = await functions.querySingle(`SELECT orders.id,SUM(ordered_products.price) AS price FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
         INNER JOIN products ON ordered_products.p_id = products.id  WHERE orders.id = ${id}`);
        let updatedInvoice = await functions.querySingle(`UPDATE invoice SET TotalPrice = ${totalPrice[0].price} WHERE ref_id=${totalPrice[0].id} AND type= ${type}`);
        return updatedInvoice;
    } catch (error) {
        return error;
    }


}

exports.getOrder = async(req, res) => {
    try {

        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,hotel.id AS hotel_id,hotel.name 
        AS hotel_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity,ordered_products.price,ordered_products.PerPrice FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
        INNER JOIN hotel ON orders.ref_id = hotel.id INNER JOIN products ON ordered_products.p_id = products.id WHERE orders.status = 0 AND orders.type='HOTEL'  ORDER BY orders.date DESC `);
        // let allOrders = await getAllOrders();
        // let alltotal = await getAlltotal(allOrders);
        // let allproduct = await allproducts(alltotal);
        let orders = allproduct.map((element) => {

            return {
                "id": element.order_id,
                "date": element.date,
                "hotel": { "hotel_id": element.hotel_id, "hotel_name": element.hotel_name },
                "products": [{ "id": element.p_id, "name": element.name, "marathi": element.marathi, "hindi": element.hindi, "weight_type": element.weight_type, "quantity": element.quantity, "price": element.price,"PerPrice":element.PerPrice }]
            }

        });

        let exists = [];
        let updatedOrders = [];

        orders.map((element, j) => {

            for (var i = 0; i < orders.length; i++) {
                if (i != j) {
                    if (element.id == orders[i].id) {
                        element.products = element.products.concat(orders[i].products);
                    }
                }
            }
            if (exists.indexOf(element.id) == -1) {
                updatedOrders.push(element);
                exists.push(element.id);
            }
        })

        // console.log(exists);
        return updatedOrders;
        // res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}
exports.getOrderByHotel = async(id) => {
    try {

        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,hotel.id AS hotel_id,hotel.name 
        AS hotel_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity,ordered_products.price,ordered_products.PerPrice FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
        INNER JOIN hotel ON orders.ref_id = hotel.id INNER JOIN products ON ordered_products.p_id = products.id  WHERE hotel.id = ${id} AND orders.status =0 AND orders.type='HOTEL'`);
        // let allOrders = await getAllOrders();
        // let alltotal = await getAlltotal(allOrders);
        // let allproduct = await allproducts(alltotal);
        let orders = allproduct.map((element) => {

            return {
                "id": element.order_id,
                "date": element.date,
                "hotel": { "hotel_id": element.hotel_id, "hotel_name": element.hotel_name },
                "products": [{ "id": element.p_id, "name": element.name, "marathi": element.marathi, "hindi": element.hindi, "weight_type": element.weight_type, "quantity": element.quantity, "price": element.price,"PerPrice":element.PerPrice}]
            }

        });

        let exists = [];
        let updatedOrders = [];

        orders.map((element, j) => {

            for (var i = 0; i < orders.length; i++) {
                if (i != j) {
                    if (element.id == orders[i].id) {
                        element.products = element.products.concat(orders[i].products);
                    }
                }
            }
            if (exists.indexOf(element.id) == -1) {
                updatedOrders.push(element);
                exists.push(element.id);
            }
        })

        // console.log(exists);
        return updatedOrders;
        // res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}

exports.getOrderById = async(id) => {
    try {

        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,hotel.id AS hotel_id,hotel.name 
        AS hotel_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity,ordered_products.price,ordered_products.PerPrice FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
        INNER JOIN hotel ON orders.ref_id = hotel.id INNER JOIN products ON ordered_products.p_id = products.id  WHERE orders.id = ${id} AND orders.status =0 AND orders.type='HOTEL'`);
        // let allOrders = await getAllOrders();
        // let alltotal = await getAlltotal(allOrders);
        // let allproduct = await allproducts(alltotal);
        let orders = allproduct.map((element) => {

            return {
                "id": element.order_id,
                "date": element.date,
                "hotel": { "hotel_id": element.hotel_id, "hotel_name": element.hotel_name },
                "products": [{ "id": element.p_id, "name": element.name, "marathi": element.marathi, "hindi": element.hindi, "weight_type": element.weight_type, "quantity": element.quantity, "price": element.price,"PerPrice":element.PerPrice }]
            }

        });

        let exists = [];
        let updatedOrders = [];

        orders.map((element, j) => {

            for (var i = 0; i < orders.length; i++) {
                if (i != j) {
                    if (element.id == orders[i].id) {
                        element.products = element.products.concat(orders[i].products);
                    }
                }
            }
            if (exists.indexOf(element.id) == -1) {
                updatedOrders.push(element);
                exists.push(element.id);
            }
        })

        // console.log(exists);
        return updatedOrders;
        // res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}

exports.getOrderByDate = async(date) => {
    try {
        // console.log(date);
        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,hotel.id AS hotel_id,hotel.name AS hotel_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity AS quantity ,ordered_products.price AS price,ordered_products.PerPrice  FROM orders INNER JOIN ordered_products ON orders.id = ordered_products.order_id INNER JOIN hotel ON orders.ref_id = hotel.id INNER JOIN products ON ordered_products.p_id = products.id WHERE orders.date = '${date}' AND orders.status =0 AND orders.type='HOTEL' `);


        return allproduct;
        // res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}

exports.getOrderByDateHotel = async(date, id) => {
        try {

            let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,hotel.id AS hotel_id,hotel.name 
            AS hotel_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,SUM(ordered_products.quantity) AS quantity,SUM(ordered_products.price)AS price,ordered_products.PerPrice  FROM orders 
            INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
            INNER JOIN hotel ON orders.ref_id = hotel.id INNER JOIN products ON ordered_products.p_id = products.id  WHERE hotel.id = ${id} AND orders.date ='${date}' AND orders.status =0 AND orders.type='HOTEL' GROUP BY ordered_products.p_id`);
            // let allOrders = await getAllOrders();
            // let alltotal = await getAlltotal(allOrders);
            // let allproduct = await allproducts(alltotal);
            let orders = allproduct.map((element) => {

                return {
                    "id": element.order_id,
                    "date": element.date,
                    "hotel": { "hotel_id": element.hotel_id, "hotel_name": element.hotel_name },
                    "products": [{ "id": element.p_id, "name": element.name, "marathi": element.marathi, "hindi": element.hindi, "weight_type": element.weight_type, "quantity": element.quantity, "price": element.price,"PerPrice":element.PerPrice }]
                }

            });
            // console.log(orders);

            let exists = [];
            let updatedOrders = [];
            let k = 1;
            orders.map((element, j) => {
                if (k == 1) {
                    for (var i = 0; i < orders.length; i++) {
                        if (i != j) {
                            if (element.date == orders[i].date) {

                                element.products = element.products.concat(orders[i].products);
                            }
                        }
                    }
                    if (exists.indexOf(element.id) == -1) {
                        updatedOrders.push(element);
                        exists.push(element.id);
                    }
                    k++;
                }
            })

            // console.log(updatedOrders);
            return updatedOrders;
            // res.json(updatedOrders);
        } catch (error) {
            console.log(error);
        }

    }
    //action add orders 
exports.addOrder = async(req, res, next) => {
    let order_id;

    function addOrder(req, res, next) {

        return new Promise((resolve, reject) => {
            // if (!req.session.u_id) reject(mess = new Custom('login error', 'please login first then try', 401));
            const { ref, type, date, count } = req.body;
            // console.log( ref, type, date, count);
            if (!ref || !type || !count || !date) {


                reject(customError.dataInvalid);


            } else {
                let stamp = date;
                let data = [
                    [
                        req.session.u_id,
                        ref,
                        type,
                        stamp
                    ]
                ]
               
                sq = 'INSERT INTO orders (u_id,ref_id,type,date) VALUES ?';
                sql.query(sq, [data], async(err, rows, result) => {
                    if (!err) {
                        order_id = rows.insertId;
                        let ordered_products = [];
                        let count = req.body.count;
                        if (count == 0) reject(customError.dataInvalid);
                        
                        while (count != 0) {
                            let qu = eval('req.body.quantity' + count);
                            let id = eval('req.body.product_id' + count);
                            let price = eval('req.body.price' + count);
                            if (qu) {
                                let dummy = new Array(order_id, id, qu, qu*price,price);
                                ordered_products.push(dummy);
                            }

                            count--;
                            // console.log(ordered_products);
                        }
                        if (ordered_products.length ===0) {
                           await functions.querySingle(`DELETE FROM orders WHERE id =${rows.insertId}`);
                           reject(customError.dataInvalid); 
                        }
                        let invoice = [
                            [
                                req.session.u_id,
                                rows.insertId,
                                new Date()
                            ]
                        ]
                        sq = 'INSERT INTO invoice (u_id,ref_id,date) VALUES ?';
                        sql.query(sq, [invoice], (err, rows, result) => {
                            if (!err) {
                                resolve({
                                    error: false,
                                    details: rows
                                });
                            } else {
                                reject(
                                    // console.log(err),
                                    mess = new Custom('Database error', err.code, 401)
                                );
                            }

                        });
                        sq = 'INSERT INTO ordered_products (order_id,p_id,quantity,price,PerPrice) VALUES ?';
                        sql.query(sq, [ordered_products], (err, rows, result) => {
                            if (!err) {
                                resolve({
                                    error: false,
                                    details: rows
                                });
                            } else {
                                reject(
                                    console.log(err),
                                    mess = new Custom('Database error', err.code, 401)
                                );
                            }
                        });


                    } else {
                        reject(
                            console.log(err),
                            mess = new Custom('Database error', err.code, 401)

                        );
                    }
                });

            }


        })
    }
    addOrder(req, res, next).then(async(message) => {
        let updatedInovice = await updateInvoice(order_id, 0);
        res.status(message.code).redirect('/order/addOrder?status=added');
    }).catch(error => {
        // console.log(error);
        res.status(error.code).redirect(`/order/addOrder?status=Error&message=${error.message}`);
    })

}



//some action edit ordered products

exports.editOrder = async(req, res, next) => {

    function editOrder(req, res, next) {

        return new Promise((resolve, reject) => {
            // if (!req.session.u_id) reject(mess = new Custom('login error', 'please login first then try', 401));
            const { ref, type, orderID, date, count } = req.body;
            // console.log(name, phone);
            // console.log(`ref ${ref} ${type} ${orderID} ${date} ${count}`);

            if (!ref || !type || !orderID || !date || !count) {

                reject(customError.dataInvalid);


            } else {


                sq = `UPDATE orders SET ref_id=${ref},u_id=${req.session.u_id},type='${type}', date='${date}' WHERE id=${orderID}`;
                sql.query(sq, [data], (err, rows, result) => {
                    if (!err) {
                        let ordered_products = [];
                        let count = req.body.count;
                        if (count == 0) reject(customError.dataInvalid);
                        while (count != 0) {
                            let qu = eval('req.body.quantity' + count);
                            let id = eval('req.body.product_id' + count);
                            let price = eval('req.body.price' + count);
                            if (qu) {
                                let dummy = new Array(orderID, id, qu, qu*price,price);
                                ordered_products.push(dummy);
                            }

                            count--;
                            // console.log(ordered_products);
                        }
                        // console.log(orderID);
                        sq = `DELETE FROM ordered_products WHERE order_id=${orderID}`;
                        sql.query(sq, (err, rows, result) => {
                            if (!err) {
                                sq1 = 'INSERT INTO ordered_products (order_id,p_id,quantity,price,PerPrice) VALUES ?';
                                sql.query(sq1, [ordered_products], async(err, rows, result) => {
                                    if (!err) {
                                        let updatedInovice = await updateInvoice(orderID, 0);

                                        resolve({
                                            error: false,
                                            details: rows
                                        });
                                    } else {
                                        reject(
                                            console.log(err),
                                            mess = new Custom('Database error', err.code, 401)
                                        );
                                    }
                                });

                            } else {
                                reject(
                                    console.log(err),
                                    mess = new Custom('Database error', err.code, 401)
                                );
                            }
                        });



                    } else {
                        reject(
                            console.log(err),
                            mess = new Custom('Database error', err.code, 401)

                        );
                    }
                });

            }


        })
    }
    editOrder(req, res, next).then(message => {
        res.status(message.code).redirect('/order/selectOrder?status=updated');
    }).catch(error => {
        console.log(error);
        res.status(error.code).redirect(`/order/selectOrder?status=Error&message=${error}`);
    })

}

exports.deleteOrder = async(req, res) => {
    try {
        const Orderid = parseInt(req.params.id);
        // console.log(Orderid);
        if (Orderid <= 0 || !Orderid) throw customError.dataInvalid;
        // let ordered = await functions.querySingle(`DELETE FROM ordered_products WHERE order_id=${Orderid}`);
        let orders = await functions.querySingle(`UPDATE orders SET status = 1 WHERE id = ${Orderid}`);
        res.status(200).redirect('/order/selectOrder?status=Deleted');

    } catch (error) {
        console.log(error);
        res.status(401).redirect(`/order/selectOrder?status=Error&message=${error}`);

    }

};



exports.addPurchase = async(req, res, next) => {

    function addOrder(req, res, next) {

        return new Promise((resolve, reject) => {
            // if (!req.session.u_id) reject(mess = new Custom('login error', 'please login first then try', 401));
            const { ref, type, date, count } = req.body;
            // console.log(name, phone);
            if (!ref || !type || !count || !date) {


                reject(customError.dataInvalid);


            } else {
                let stamp = date;
                let data = [
                    [
                        req.session.u_id,
                        ref,
                        type,
                        stamp
                    ]
                ]
                sq = 'INSERT INTO orders (u_id,ref_id,type,date) VALUES ?';
                sql.query(sq, [data], async (err, rows, result) => {
                    if (!err) {
                        let order_id = rows.insertId;
                        let ordered_products = [];
                        let count = req.body.count;
                        if (count == 0) reject(customError.dataInvalid);
                        while (count != 0) {
                            let qu = eval('req.body.quantity' + count);
                            let id = eval('req.body.product_id' + count);
                            let price = eval('req.body.price' + count);
                            if (qu) {
                                let dummy = new Array(order_id, id, qu, qu*price,price);
                                ordered_products.push(dummy);
                            }

                            count--;
                            // console.log(ordered_products);
                        }
                        if (ordered_products.length ===0) {
                            await functions.querySingle(`DELETE FROM orders WHERE id =${rows.insertId}`);
                            reject(customError.dataInvalid); 
                         }
                        let invoice = [
                            [
                                req.session.u_id,
                                rows.insertId,
                                new Date(),
                                1
                            ]
                        ]
                        sq = 'INSERT INTO invoice (u_id,ref_id,date,type) VALUES ?';
                        sql.query(sq, [invoice], (err, rows, result) => {
                            if (!err) {
                                resolve({
                                    error: false,
                                    details: rows
                                });
                            } else {
                                reject(
                                    // console.log(err),
                                    mess = new Custom('Database error', err.code, 401)
                                );
                            }

                        });
                        sq = 'INSERT INTO ordered_products (order_id,p_id,quantity,price,PerPrice) VALUES ?';
                        sql.query(sq, [ordered_products], async(err, rows, result) => {
                            if (!err) {
                                let updatedInovice = await updateInvoice(order_id, 1);

                                resolve({
                                    error: false,
                                    details: rows
                                });
                            } else {
                                reject(
                                    console.log(err),
                                    mess = new Custom('Database error', err.code, 401)
                                );
                            }
                        });


                    } else {
                        reject(
                            console.log(err),
                            mess = new Custom('Database error', err.code, 401)

                        );
                    }
                });

            }


        })
    }
    addOrder(req, res, next).then(message => {
        res.status(message.code).redirect('/order/addPurchase?status=added');
    }).catch(error => {
        // console.log(error);
        res.status(error.code).redirect(`/order/addPurchase?status=Error&message=${error}`);
    })

}
exports.addTotalPurchase = async(req, res, next)=>{
    function addOrder(req, res, next) {

        return new Promise((resolve, reject) => {
            // if (!req.session.u_id) reject(mess = new Custom('login error', 'please login first then try', 401));
            const { ref, type, date } = req.body;
            // console.log(name, phone);
            if (!ref || !type || !date) {


                reject(customError.dataInvalid);


            } else {
                let stamp = date;
                let data = [
                    [
                        req.session.u_id,
                        ref,
                        type,
                        stamp
                    ]
                ]
                sq = 'INSERT INTO orders (u_id,ref_id,type,date) VALUES ?';
                sql.query(sq, [data], async (err, rows, result) => {
                    if (!err) {
                        let order_id = rows.insertId;
                        let ordered_products = [];
                      
                       
                            let qu = req.body.quantity;
                            let id = req.body.id
                            let price = req.body.price
                            if (qu) {
                                let dummy = new Array(order_id, id, qu, qu*price,price);
                                ordered_products.push(dummy);
                            }

                            
                        if (ordered_products.length ===0) {
                            await functions.querySingle(`DELETE FROM orders WHERE id =${rows.insertId}`);
                            reject(customError.dataInvalid); 
                         }
                        let invoice = [
                            [
                                req.session.u_id,
                                rows.insertId,
                                new Date(),
                                1
                            ]
                        ]
                        sq = 'INSERT INTO invoice (u_id,ref_id,date,type) VALUES ?';
                        sql.query(sq, [invoice], (err, rows, result) => {
                            if (!err) {
                                resolve({
                                    error: false,
                                    details: rows
                                });
                            } else {
                                reject(
                                    // console.log(err),
                                    mess = new Custom('Database error', err.code, 401)
                                );
                            }

                        });
                        sq = 'INSERT INTO ordered_products (order_id,p_id,quantity,price,PerPrice) VALUES ?';
                        sql.query(sq, [ordered_products], async(err, rows, result) => {
                            if (!err) {
                                let updatedInovice = await updateInvoice(order_id, 1);

                                resolve({
                                    error: false,
                                    details: rows
                                });
                            } else {
                                reject(
                                    console.log(err),
                                    mess = new Custom('Database error', err.code, 401)
                                );
                            }
                        });


                    } else {
                        reject(
                            console.log(err),
                            mess = new Custom('Database error', err.code, 401)

                        );
                    }
                });

            }


        })
    }
    addOrder(req, res, next).then(message => {
        res.status(200).send(message);
    }).catch(error => {
        // console.log(error);
        res.status(error.code).send(error);
    })
}
exports.editPurchase = async(req, res, next) => {

    function editOrder(req, res, next) {

        return new Promise((resolve, reject) => {
            // if (!req.session.u_id) reject(mess = new Custom('login error', 'please login first then try', 401));
            const { ref, type, orderID, date, count } = req.body;
            // console.log(name, phone);
            // console.log(`ref ${ref} ${type} ${orderID} ${date} ${count}`);

            if (!ref || !type || !orderID || !date || !count) {

                reject(customError.dataInvalid);


            } else {


                sq = `UPDATE orders SET ref_id=${ref},u_id=${req.session.u_id},type='${type}', date='${date}' WHERE id=${orderID}`;
                sql.query(sq, [data], (err, rows, result) => {
                    if (!err) {
                        let ordered_products = [];
                        let count = req.body.count;
                        if (count == 0) reject(customError.dataInvalid);
                        while (count != 0) {
                            let qu = eval('req.body.quantity' + count);
                            let id = eval('req.body.product_id' + count);
                            let price = eval('req.body.price' + count);
                            if (qu) {
                                let dummy = new Array(orderID, id, qu, qu*price,price);
                                ordered_products.push(dummy);
                            }

                            count--;
                            // console.log(ordered_products);
                        }
                        // console.log(orderID);
                        sq = `DELETE FROM ordered_products WHERE order_id=${orderID}`;
                        sql.query(sq, (err, rows, result) => {
                            if (!err) {
                                sq1 = 'INSERT INTO ordered_products (order_id,p_id,quantity,price,PerPrice) VALUES ?';
                                sql.query(sq1, [ordered_products], async(err, rows, result) => {
                                    if (!err) {
                                        let updatedInovice = await updateInvoice(orderID, 1);

                                        resolve({
                                            error: false,
                                            details: rows
                                        });
                                    } else {
                                        reject(
                                            console.log(err),
                                            mess = new Custom('Database error', err.code, 401)
                                        );
                                    }
                                });
                            } else {
                                reject(
                                    console.log(err),
                                    mess = new Custom('Database error', err.code, 401)
                                );
                            }
                        });



                    } else {
                        reject(
                            console.log(err),
                            mess = new Custom('Database error', err.code, 401)

                        );
                    }
                });

            }


        })
    }
    editOrder(req, res, next).then(message => {
        res.status(message.code).redirect('/order/selectPurchase?status=updated');
    }).catch(error => {
        console.log(error);
        res.status(error.code).redirect(`/order/selectPurchase?status=Error&message=${error}`);
    })

}
exports.getPurchase = async(req, res) => {
    try {

        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,vendor.id AS vendor_id,vendor.name 
        AS vendor_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity,ordered_products.price,ordered_products.PerPrice FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
        INNER JOIN vendor ON orders.ref_id = vendor.id INNER JOIN products ON ordered_products.p_id = products.id WHERE orders.status = 0 AND orders.type='VENDOR'  ORDER BY orders.date DESC `);
        // let allOrders = await getAllOrders();
        // let alltotal = await getAlltotal(allOrders);
        // let allproduct = await allproducts(alltotal);
        let orders = allproduct.map((element) => {

            return {
                "id": element.order_id,
                "date": element.date,
                "vendor": { "vendor_id": element.vendor_id, "vendor_name": element.vendor_name },
                "products": [{ "id": element.p_id, "name": element.name, "marathi": element.marathi, "hindi": element.hindi, "weight_type": element.weight_type, "quantity": element.quantity, "price": element.price,"PerPrice":element.PerPrice}]
            }

        });

        let exists = [];
        let updatedOrders = [];

        orders.map((element, j) => {

            for (var i = 0; i < orders.length; i++) {
                if (i != j) {
                    if (element.id == orders[i].id) {
                        element.products = element.products.concat(orders[i].products);
                    }
                }
            }
            if (exists.indexOf(element.id) == -1) {
                updatedOrders.push(element);
                exists.push(element.id);
            }
        })

        // console.log(exists);
        return updatedOrders;
        // res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}


exports.getPurchaseById = async(id) => {
    try {

        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,vendor.id AS vendor_id,vendor.name 
        AS vendor_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity,ordered_products.price,ordered_products.PerPrice FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
        INNER JOIN vendor ON orders.ref_id = vendor.id INNER JOIN products ON ordered_products.p_id = products.id  WHERE orders.id = ${id} AND orders.status =0 AND orders.type='VENDOR'`);

        let orders = allproduct.map((element) => {

            return {
                "id": element.order_id,
                "date": element.date,
                "vendor": { "vendor_id": element.vendor_id, "vendor_name": element.vendor_name },
                "products": [{ "id": element.p_id, "name": element.name, "marathi": element.marathi, "hindi": element.hindi, "weight_type": element.weight_type, "quantity": element.quantity, "price": element.price,"PerPrice":element.PerPrice }]
            }

        });

        let exists = [];
        let updatedOrders = [];

        orders.map((element, j) => {

            for (var i = 0; i < orders.length; i++) {
                if (i != j) {
                    if (element.id == orders[i].id) {
                        element.products = element.products.concat(orders[i].products);
                    }
                }
            }
            if (exists.indexOf(element.id) == -1) {
                updatedOrders.push(element);
                exists.push(element.id);
            }
        })

        // console.log(exists);
        return updatedOrders;
        // res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}

exports.getPurchaseByDate = async(date) => {
    try {
        // console.log(date);
        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,vendor.id AS vendor_id,vendor.name 
        AS vendor_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity AS quantity ,ordered_products.price AS price,ordered_products.PerPrice  FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
        INNER JOIN vendor ON orders.ref_id = vendor.id INNER JOIN products ON ordered_products.p_id = products.id  WHERE orders.date = '${date}' AND orders.status =0 AND orders.type='VENDOR'`);
        
        return allproduct;
        // res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}

exports.deletePurchase = async(req, res) => {
    try {
        const Orderid = parseInt(req.params.id);
        // console.log(Orderid);
        if (Orderid <= 0 || !Orderid) throw customError.dataInvalid;
        // let ordered = await functions.querySingle(`DELETE FROM ordered_products WHERE order_id=${Orderid}`);
        let orders = await functions.querySingle(`UPDATE orders SET status = 1 WHERE id = ${Orderid}`);
        res.status(200).redirect('/order/selectPurchase?status=Deleted');

    } catch (error) {
        console.log(error);
        res.status(401).redirect(`/order/selectPurchase?status=Error&message=${error}`);

    }

};


exports.getOrderByVendor = async(id) => {
    try {

        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,vendor.id AS vendor_id,vendor.name 
        AS vendor_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity,ordered_products.price,ordered_products.PerPrice FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
        INNER JOIN vendor ON orders.ref_id = vendor.id INNER JOIN products ON ordered_products.p_id = products.id  WHERE vendor.id =${id} AND orders.status =0 AND orders.type='VENDOR'`);
        // let allOrders = await getAllOrders();
        // let alltotal = await getAlltotal(allOrders);
        // let allproduct = await allproducts(alltotal);
        let orders = allproduct.map((element) => {

            return {
                "id": element.order_id,
                "date": element.date,
                "vendor": { "vendor_id": element.vendor_id, "vendor_name": element.vendor_name },
                "products": [{ "id": element.p_id, "name": element.name, "marathi": element.marathi, "hindi": element.hindi, "weight_type": element.weight_type, "quantity": element.quantity, "price":element.price,"PerPrice":element.PerPrice }]
            }

        });

        let exists = [];
        let updatedOrders = [];

        orders.map((element, j) => {

            for (var i = 0; i < orders.length; i++) {
                if (i != j) {
                    if (element.id == orders[i].id) {
                        element.products = element.products.concat(orders[i].products);
                    }
                }
            }
            if (exists.indexOf(element.id) == -1) {
                updatedOrders.push(element);
                exists.push(element.id);
            }
        })

        // console.log(exists);
        return updatedOrders;
        // res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}

exports.getOrderByDateVendor = async(date, id) => {
    try {

        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,vendor.id AS vendor_id,vendor.name 
        AS vendor_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,SUM(ordered_products.quantity) AS quantity,SUM(ordered_products.price) AS price,ordered_products.PerPrice  FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
        INNER JOIN vendor ON orders.ref_id = vendor.id INNER JOIN products ON ordered_products.p_id = products.id  WHERE vendor.id = ${id} AND orders.date ='${date}' AND orders.status =0 AND orders.type='VENDOR' GROUP BY ordered_products.p_id`);
        // let allOrders = await getAllOrders();
        // let alltotal = await getAlltotal(allOrders);
        // let allproduct = await allproducts(alltotal);
        let orders = allproduct.map((element) => {

            return {
                "id": element.order_id,
                "date": element.date,
                "vendor": { "vendor_id": element.vendor_id, "vendor_name": element.vendor_name },
                "products": [{ "id": element.p_id, "name": element.name, "marathi": element.marathi, "hindi": element.hindi, "weight_type": element.weight_type, "quantity": element.quantity, "price": element.price,"PerPrice":element.PerPrice}]
            }

        });
        // console.log(orders);

        let exists = [];
        let updatedOrders = [];
        let k = 1;
        orders.map((element, j) => {
            if (k == 1) {
                for (var i = 0; i < orders.length; i++) {
                    if (i != j) {
                        if (element.date == orders[i].date) {

                            element.products = element.products.concat(orders[i].products);
                        }
                    }
                }
                if (exists.indexOf(element.id) == -1) {
                    updatedOrders.push(element);
                    exists.push(element.id);
                }
                k++;
            }
        })

        // console.log(updatedOrders);
        return updatedOrders;
        // res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}


//action to add expense 
exports.addExpense = async(req, res, next) => {
    const { name, discription, amount } = req.body;
    let date = req.body.date;
    // console.log(date);
    try {
        if (!name || !discription || !amount) throw customError.dataInvalid;
        if (!date) {
            date = new Date()
        }
        // console.log(date);
        if (amount < 0) throw new Custom('Enter valid amount', 'Enter valid amount', 401);
        let expense = await functions.querySingle(`INSERT INTO expense (name,discription,date,amount) VALUES ('${name}','${discription}','${date}',${amount})`);

        let invoice = await functions.querySingle(`INSERT INTO invoice (u_id,ref_id,date,status,type,paid_amount,TotalPrice) VALUES (${req.session.u_id},${expense.insertId},now(),1,2,${amount},${amount})`);
        res.status(200).redirect('/order/addExpense?status=added');

    } catch (error) {
        res.status(error.code).redirect(`/order/addExpense?status=Error&message=${error}`);

    }
}

//action to add expense 
exports.editExpense = async(req, res, next) => {
    const { name, discription, amount, id } = req.body;
    let date = req.body.date;
    // console.log(date);
    try {
        if (!name || !discription || !amount || !id) throw customError.dataInvalid;

        // console.log(date);
        if (amount < 0) throw new Custom('Enter valid amount', 'Enter valid amount', 401);
        let expense = await functions.querySingle(`UPDATE expense SET name = '${name}',discription="${discription}",date='${date}',amount=${amount} WHERE id = ${id}`);

        let invoice = await functions.querySingle(`UPDATE invoice SET u_id = ${req.session.u_id},date=now(),status=1,paid_amount=${amount},TotalPrice=${amount} WHERE ref_id= ${id} AND type = 2`);
        res.status(200).redirect(`/order/editExpense/${id}?status=Edited`);

    } catch (error) {
        res.status(error.code).redirect(`/order/editExpense/${id}?status=Error&message=${error}`);

    }
}

//action to add expense 
exports.deleteExpense = async(req, res, next) => {
    const { id } = req.params;

    try {
        if (!id) throw customError.dataInvalid;
        let expense = await functions.querySingle(`UPDATE expense SET status = 1 WHERE id = ${id}`);
        res.status(200).redirect(`/order/select?status=Deleted`);

    } catch (error) {
        res.status(error.code).redirect(`/order/select?status=Error&message=${error}`);

    }
}
exports.getExpense = async(req, res) => {
    try {
        let expense = await functions.querySingle(`SELECT * FROM expense WHERE status = 0`);
        return expense;
    } catch (error) {
        console.log(error);
    }



}
exports.getExpenseByID = async(id) => {
    try {
        let expense = await functions.querySingle(`SELECT * FROM expense WHERE status = 0 AND id = ${id}`);
        return expense;
    } catch (error) {
        console.log(error);
    }



}

exports.getOrderSum = async(req,res)=>{
    
    try {
       
        if (!req.query.date1 || !req.query.date2 || !req.query.id ||!req.query.type) throw customError.dataInvalid;   
        let orders;
        if (req.query.type=='HOTEL') {
         orders = await functions.querySingle(`SELECT invoice.type,orders.ref_id,orders.id,orders.type,orders.date,invoice.status,invoice.paid_amount,invoice.TotalPrice FROM orders INNER JOIN invoice ON invoice.ref_id = orders.id WHERE invoice.type= 0  AND orders.ref_id =${req.query.id} AND orders.type='${req.query.type}' AND ((orders.date BETWEEN '${req.query.date1}'AND '${req.query.date2}') OR (orders.date BETWEEN '${req.query.date1}'AND '${req.query.date2}') OR (orders.date <= '${req.query.date1}' AND orders.date >= '${req.query.date2}')) `);        
            
        }else if (req.query.type='VENDOR') {
         orders = await functions.querySingle(`SELECT invoice.type,orders.ref_id,orders.id,orders.type,orders.date,invoice.status,invoice.paid_amount,invoice.TotalPrice FROM orders INNER JOIN invoice ON invoice.ref_id = orders.id WHERE invoice.type= 1  AND orders.ref_id =${req.query.id} AND orders.type='${req.query.type}' AND ((orders.date BETWEEN '${req.query.date1}'AND '${req.query.date2}') OR (orders.date BETWEEN '${req.query.date1}'AND '${req.query.date2}') OR (orders.date <= '${req.query.date1}' AND orders.date >= '${req.query.date2}')) `);        
            
        }
       
        res.send(orders);            
      
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

exports.getOrderSumby = async(date1,date2,id,type)=>{
    
    try {
       
        if (!date1 || !date2 || !id ||!type) throw customError.dataInvalid;
        let orders;
        if (type=='HOTEL') {    
         orders = await functions.querySingle(`SELECT invoice.type,orders.ref_id,orders.id,orders.type,orders.date,invoice.status,invoice.paid_amount,invoice.TotalPrice FROM orders INNER JOIN invoice ON invoice.ref_id = orders.id WHERE invoice.type= 0  AND orders.ref_id =${id} AND orders.type='${type}' AND ((orders.date BETWEEN '${date1}'AND '${date2}') OR (orders.date BETWEEN '${date1}'AND '${date2}') OR (orders.date <= '${date1}' AND orders.date >= '${date2}')) `);        
    }else if (type='VENDOR') {
         orders = await functions.querySingle(`SELECT invoice.type,orders.ref_id,orders.id,orders.type,orders.date,invoice.status,invoice.paid_amount,invoice.TotalPrice FROM orders INNER JOIN invoice ON invoice.ref_id = orders.id WHERE invoice.type= 1  AND orders.ref_id =${id} AND orders.type='${type}' AND ((orders.date BETWEEN '${date1}'AND '${date2}') OR (orders.date BETWEEN '${date1}'AND '${date2}') OR (orders.date <= '${date1}' AND orders.date >= '${date2}')) `);        
    }
            return orders;
      
    } catch (error) {
        console.log(error);
       return error;
      
    }
}


exports.getDailySum = async(req,res)=>{
    
    try {
       
          if (!req.params.date) throw customError.dataInvalid;
        
         HotelOrders = await functions.querySingle(`SELECT invoice.paid_amount,orders.date,ordered_products.order_id,hotel.id AS hotel_id,hotel.name AS hotel_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity AS quantity ,SUM(ordered_products.price)  AS price,ordered_products.PerPrice FROM orders INNER JOIN ordered_products ON orders.id = ordered_products.order_id INNER JOIN hotel ON orders.ref_id = hotel.id INNER JOIN products ON ordered_products.p_id = products.id  INNER JOIN invoice ON invoice.ref_id = orders.id WHERE orders.date = '${req.params.date}' AND orders.status =0 AND invoice.type = 0 AND orders.type='HOTEL' GROUP BY hotel.name`);        
  
         VendorOrders = await functions.querySingle(`SELECT invoice.paid_amount,orders.date,ordered_products.order_id,vendor.id AS vendor_id,vendor.name 
         AS vendor_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity AS quantity ,ordered_products.price AS price,ordered_products.PerPrice  FROM orders 
         INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
         INNER JOIN vendor ON orders.ref_id = vendor.id INNER JOIN products ON ordered_products.p_id = products.id INNER JOIN invoice ON invoice.ref_id = orders.id  WHERE orders.date = '${req.params.date}' AND orders.status =0 AND invoice.type = 1 AND orders.type='VENDOR'`);        
         expense = await functions.querySingle(`SELECT * FROM expense WHERE status = 0 AND date = '${req.params.date}' `);
        res.send({
            "hotelOrders":HotelOrders,
            "vendorOrders":VendorOrders,
            "expense":expense
        });            
      
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}


exports.getDailySumByDate = async(date)=>{
    
    try {
       
          if (!date) throw customError.dataInvalid;
        
         HotelOrders = await functions.querySingle(`SELECT invoice.paid_amount,orders.date,ordered_products.order_id,hotel.id AS hotel_id,hotel.name AS hotel_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity AS quantity ,SUM(ordered_products.price)  AS price,ordered_products.PerPrice FROM orders INNER JOIN ordered_products ON orders.id = ordered_products.order_id INNER JOIN hotel ON orders.ref_id = hotel.id INNER JOIN products ON ordered_products.p_id = products.id  INNER JOIN invoice ON invoice.ref_id = orders.id WHERE orders.date = '${date}' AND orders.status =0 AND  invoice.type = 0 AND orders.type='HOTEL' GROUP BY hotel.name`);        
  
         VendorOrders = await functions.querySingle(`SELECT invoice.paid_amount,orders.date,ordered_products.order_id,vendor.id AS vendor_id,vendor.name 
         AS vendor_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity AS quantity ,SUM(ordered_products.price) AS price,ordered_products.PerPrice  FROM orders 
         INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
         INNER JOIN vendor ON orders.ref_id = vendor.id INNER JOIN products ON ordered_products.p_id = products.id  INNER JOIN invoice ON invoice.ref_id = orders.id  WHERE orders.date = '${date}' AND invoice.type = 1 AND orders.status =0 AND orders.type='VENDOR' GROUP BY vendor.name`);        
         expense = await functions.querySingle(`SELECT * FROM expense WHERE status = 0 AND date = '${date}' `);
        //  console.log(VendorOrders);
       
        return ({
            "hotelOrders":HotelOrders,
            "vendorOrders":VendorOrders,
            "expense":expense
        });            
      
    } catch (error) {
        return (error);
        
    }
}