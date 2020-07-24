const sql = require('../../connection');
const customError = require('../custom/errors');
const Custom = require('../custom/error');
const { PerformanceObserver, performance } = require('perf_hooks');
const functions = require('../custom/function');
const e = require('express');

// let getAllOrders = () => {
//     return new Promise((resolve, reject) => {
//         try {
//             sql.query(`SELECT * FROM orders ORDER BY date DESC `, (err, results) => {
//                 if (err) throw err;
//                 if (!results[0]) throw customError.productNotFound;
//                 resolve(results);
//             });
//         } catch (err) {
//             console.log(err);
//             reject(mess = new Custom('Database error', err.code, 401))
//         }

//     });
// }

// let getAlltotal = async(orderArray) => {
//     try {


//         let query1 = (x) => {
//             return new Promise((resolve, reject) => {
//                 sql.query(`SELECT * FROM hotel WHERE id=${x}`, (err, results) => {
//                     if (err) throw err;
//                     if (!results[0]) throw customError.productNotFound;
//                     resolve(results);
//                 })
//             });
//         }

//         await Promise.all(orderArray.map(async(e, i) => orderArray[i].hotel = await query1(e.ref_id)));



//         return orderArray;
//     } catch (err) {
//         console.log(err);
//         reject(mess = new Custom('Database error', err.code, 401))
//     }

// }


// let allproducts = async(orderArray) => {

//     try {

//         let query1 = (x) => {
//             return new Promise((resolve, reject) => {
//                 sql.query(`SELECT * FROM ordered_products WHERE order_id=${x}`, (err, results) => {
//                     if (err) throw err;
//                     if (!results[0]) throw customError.productNotFound;
//                     resolve(results);
//                 })
//             });
//         }

//         await Promise.all(orderArray.map(async(e, i) => orderArray[i].ordered_products = await query1(e.id)));


//         return orderArray;
//     } catch (err) {
//         console.log(err);
//         reject(mess = new Custom('Database error', err.code, 401))
//     }

// }

exports.getOrder = async(req, res) => {
    try {

        let allproduct = await functions.querySingle(`SELECT orders.date,ordered_products.order_id,hotel.id AS hotel_id,hotel.name 
        AS hotel_name,ordered_products.p_id,products.name,products.marathi,products.hindi,products.weight_type,ordered_products.quantity,ordered_products.price FROM orders 
        INNER JOIN ordered_products ON orders.id = ordered_products.order_id 
        INNER JOIN hotel ON orders.ref_id = hotel.id INNER JOIN products ON ordered_products.p_id = products.id  ORDER BY orders.date DESC`);
        // let allOrders = await getAllOrders();
        // let alltotal = await getAlltotal(allOrders);
        // let allproduct = await allproducts(alltotal);
        let orders = allproduct.map((element) => {

            return {
                "id": element.order_id,
                "date": element.date,
                "hotel": { "hotel_id": element.hotel_id, "hotel_name": element.hotel_name },
                "products": [{ "id": element.p_id, "name": element.name, "marathi": element.marathi, "hindi": element.hindi, "weight_type": element.weight_type, "quantity": element.quantity, "price": element.price }]
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

        console.log(exists);

        res.json(updatedOrders);
    } catch (error) {
        console.log(error);
    }

}


//action add orders 
exports.addOrder = async(req, res, next) => {

    function addOrder(req, res, next) {

        return new Promise((resolve, reject) => {
            // if (!req.session.u_id) reject(mess = new Custom('login error', 'please login first then try', 401));
            const { ref, type, date } = req.body;
            // console.log(name, phone);
            if (!ref || !type) {


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
                sql.query(sq, [data], (err, rows, result) => {
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
                                let dummy = new Array(order_id, id, qu, price);
                                ordered_products.push(dummy);
                            }

                            count--;
                            // console.log(ordered_products);
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
                        sq = 'INSERT INTO ordered_products (order_id,p_id,quantity,price) VALUES ?';
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
    addOrder(req, res, next).then(message => {
        res.status(message.code).redirect('/order/addOrder?status=added');
    }).catch(error => {
        // console.log(error);
        res.status(error.code).redirect('/order/addOrder?status=error');
    })

}

//some action edit ordered products

exports.editOrder = async(req, res, next) => {

    function editOrder(req, res, next) {

        return new Promise((resolve, reject) => {
            // if (!req.session.u_id) reject(mess = new Custom('login error', 'please login first then try', 401));
            const { ref, type, orderID, date } = req.body;
            // console.log(name, phone);
            if (!ref || !type || !orderID || !date) {


                reject(customError.dataInvalid);


            } else {


                sq = `UPDATE orders SET ref_id=${ref} date=${date} WHERE id=${orderID}`;
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
                                let dummy = new Array(order_id, id, qu, price);
                                ordered_products.push(dummy);
                            }

                            count--;
                            // console.log(ordered_products);
                        }

                        sq = `DELETE FROM ordered_products WHERE order_id=${orderID}`;
                        sql.query(sq, (err, rows, result) => {
                            if (!err) {
                                sq1 = 'INSERT INTO ordered_products (order_id,p_id,quantity,price) VALUES ?';
                                sql.query(sq1, [ordered_products], (err, rows, result) => {
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
        res.status(message.code).redirect('/order/editOrder?status=updated');
    }).catch(error => {
        // console.log(error);
        res.status(error.code).redirect('/order/editOrder?status=error');
    })

}