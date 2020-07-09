const sql = require('../../connection');
const customError = require('../custom/errors');
const Custom = require('../custom/error');


exports.getOrder = async(req, res) => {
    function getOrder(req, res) {
        return new Promise((resolve, reject) => {
            if (req.params.id == 'all') {

                sql.query(`SELECT * FROM orders `, (err, results) => {
                    // console.log(results);
                    if (!results[0]) {
                        reject(customError.productNotFound);
                    } else {
                        if (!err) {
                            resolve({
                                error: false,
                                details: results
                            });
                        } else {
                            reject(
                                mess = new Custom('Database error', err.code, 401)

                            );
                        }

                    }
                });

            } else {

                sql.query(`SELECT * FROM orders WHERE id=${req.params.id}`, (err, results) => {
                    if (!results[0]) {
                        reject(customError.productNotFound);
                    } else {
                        if (!err) {
                            resolve({
                                error: false,
                                details: results
                            });
                        } else {
                            reject(
                                mess = new Custom('Database error', err.code, 401)

                            );
                        }
                    }
                });

            }




        });
    }

    getOrder(req, res).then(message => {
        res.json(message);
    }).catch(error => {
        // console.log(error);
        res.status(error.code).json({
            error: true,
            details: error
        });
    });

}


//action add orders 
exports.addOrder = async(req, res, next) => {

    function addOrder(req, res, next) {

        return new Promise((resolve, reject) => {
            // if (!req.session.u_id) reject(mess = new Custom('login error', 'please login first then try', 401));
            const { ref, type } = req.body;
            // console.log(name, phone);
            if (!ref || !type) {


                reject(customError.dataInvalid);


            } else {
                let stamp = req.body.date;
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
                        let ordered_products = [];
                        let count = req.body.count;
                        if (count == 0) reject(customError.dataInvalid);
                        while (count != 0) {
                            let qu = eval('req.body.quantity' + count);
                            let id = eval('req.body.product_id' + count);
                            let price = eval('req.body.price' + count);
                            if (qu) {
                                let dummy = new Array(rows.insertId, id, qu, price);
                                ordered_products.push(dummy);
                            }

                            count--;
                            // console.log(ordered_products);
                        }
                        let invoice = [
                            [
                                req.session.u_id,
                                rows.insertId,
                                stamp
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

// exports.editOrder = async(req, res) => {
//     function editOrder(req, res) {
//         return new Promise((resolve, reject) => {


//             sql.query(`SELECT * FROM ordered_products WHERE order_id=${req.body.order_id}`, (err, results) => {
//                 if (!results[0]) {
//                     reject(customError.productNotFound);
//                 } else {
//                     if (!err) {

//                         resolve({
//                             error: false,
//                             details: results
//                         });
//                     } else {
//                         reject(
//                             mess = new Custom('Database error', err.code, 401)

//                         );
//                     }
//                 }
//             });






//         });
//     }

//     editOrder(req, res).then(message => {
//         res.json(message);
//     }).catch(error => {
//         // console.log(error);
//         res.status(error.code).json({
//             error: true,
//             details: error
//         });
//     });

// }