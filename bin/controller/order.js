const sql = require('../../connection');
const customError = require('../custom/errors');
const Custom = require('../custom/error');
const { PerformanceObserver, performance } = require('perf_hooks');


let getAllOrders = () => {
    return new Promise((resolve, reject) => {
        try {
            sql.query(`SELECT * FROM orders ORDER BY date DESC `, (err, results) => {
                if (err) throw err;
                if (!results[0]) throw customError.productNotFound;
                resolve(results);
            });
        } catch (err) {
            console.log(err);
            reject(mess = new Custom('Database error', err.code, 401))
        }

    });
}

let getAlltotal = async(orderArray) => {
    try {
        var t0 = performance.now()

        let query1 = (x) => {
            return new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM hotel WHERE id=${x}`, (err, results) => {
                    if (err) throw err;
                    if (!results[0]) throw customError.productNotFound;
                    resolve(results);
                })
            });
        }

        await Promise.all(orderArray.map(async(e, i) => orderArray[i].hotel = await query1(e.ref_id)));

        var t1 = performance.now();
        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

        return orderArray;
    } catch (err) {
        console.log(err);
        reject(mess = new Custom('Database error', err.code, 401))
    }

}

// let getAlltotal = (orderArray) => {


//     orderArray.forEach((element, e) => {
//         asynchronousProcess(sql.query(`SELECT * FROM hotel WHERE id=${element.ref_id}`, (err, results) => {
//             console.log(e);
//             orderArray[e].hotel = results;
//         }));


//     });


// }

let allproducts = async(orderArray) => {

    try {
        var t0 = performance.now()

        let query1 = (x) => {
            return new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM ordered_products WHERE order_id=${x}`, (err, results) => {
                    if (err) throw err;
                    if (!results[0]) throw customError.productNotFound;
                    resolve(results);
                })
            });
        }

        await Promise.all(orderArray.map(async(e, i) => orderArray[i].ordered_products = await query1(e.id)));

        var t1 = performance.now();
        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

        return orderArray;
    } catch (err) {
        console.log(err);
        reject(mess = new Custom('Database error', err.code, 401))
    }

}

exports.getOrder = async(req, res) => {
    try {
        let allOrders = await getAllOrders();
        let alltotal = await getAlltotal(allOrders);
        let allproduct = await allproducts(alltotal);

        res.json(allproduct);
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