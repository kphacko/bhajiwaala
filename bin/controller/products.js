const sql = require('../../connection');
const customError = require('../custom/errors');
const Custom = require('../custom/error');


// action to get products

exports.getProducts = async(req, res, next) => {

    function getProducts(req, res, next) {

        return new Promise((resolve, reject) => {

            if (req.params.id == 'all') {

                sql.query(`SELECT * FROM products WHERE status=0`, (err, results) => {
                    // console.log(results);
                    if (!results[0]) {
                        reject(customError.userNotFound);
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

                sql.query(`SELECT * FROM products WHERE status=0 AND id=${req.params.id}`, (err, results) => {
                    if (!results[0]) {
                        reject(customError.userNotFound);
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



        })
    }
    getProducts(req, res, next).then(message => {
        res.json(message);
    }).catch(error => {
        // console.log(error);
        res.status(error.code).json({
            error: true,
            details: error
        });
    })

}


//action add products 
exports.addProducts = async(req, res, next) => {

    function addProducts(req, res, next) {

        return new Promise((resolve, reject) => {

            const { name, marathi, hindi, weight_type } = req.body;
            // console.log(name, phone);
            if (!marathi || !name || !hindi || !weight_type) {


                reject(customError.dataInvalid);


            } else {
                sql.query(`SELECT * FROM products WHERE status=0 AND name = '${req.body.name}' `, (err, results) => {
                    // console.log(err);
                    if (results[0]) {
                        reject(customError.productExists);
                    } else {
                        var data = [
                            [
                                req.body.name,
                                req.body.marathi,
                                req.body.hindi,
                                req.body.weight_type
                            ]
                        ];

                        sq = 'INSERT INTO products (name,marathi,hindi,weight_type) VALUES ?';
                        sql.query(sq, [data], (err, rows, result) => {
                            if (!err) {
                                resolve({
                                    error: false,
                                    details: rows
                                });
                            } else {
                                reject(
                                    mess = new Custom('Database error', err.code, 401)

                                );
                            }
                        });
                    }
                });

            }


        })
    }
    addProducts(req, res, next).then(message => {
        res.json(message);
    }).catch(error => {
        // console.log(error);
        res.status(error.code).json({
            error: true,
            details: error
        });
    })

}

//action to edit products 

exports.editProducts = async(req, res, next) => {
    function editProducts(req, res, next) {
        return new Promise((resolve, reject) => {

            const { name, marathi, hindi, weight_type, id } = req.body;
            // console.log(name, phone);
            if (!marathi || !name || !hindi || !weight_type || !id) {
                if (!id) {
                    reject(mess = new Custom('Data is incorrect', 'Send appropriate id!!', 401));
                } else {
                    reject(customError.dataInvalid);
                }

            } else {
                sql.query(`SELECT * FROM products WHERE status=0 AND id = ${req.body.id}`, (err, results) => {
                    if (!results[0]) {
                        reject(customError.productNotFound);
                    } else {
                        let data = `name='${req.body.name}',marathi='${req.body.marathi}',hindi='${req.body.hindi}',weight_type='${req.body.weight_type}'`
                        sq = ` UPDATE products SET ${data} WHERE id=${req.body.id}`;
                        sql.query(sq, (err, rows, result) => {
                            if (!err) {
                                resolve({
                                    error: false,
                                    details: rows
                                });
                            } else {
                                console.log(err);
                                reject(
                                    mess = new Custom('Database error', err.code, 401)

                                );
                            }
                        });

                    }
                });

            }



        })
    }
    editProducts(req, res, next).then(message => {
        res.json(message);
    }).catch(error => {
        // console.log(error);
        res.status(error.code).json({
            error: true,
            details: error
        });
    })

}

//action to delete products 

exports.deleteProducts = async(req, res, next) => {
    function deleteProducts(req, res, next) {
        return new Promise((resolve, reject) => {


            if (!req.params.id) reject(mess = new Custom('Data is incorrect', 'Send appropriate id!!', 401));
            sql.query(`SELECT * FROM products WHERE status=0 AND id = ${req.params.id}`, (err, results) => {
                // console.log(err);

                if (!results[0]) {
                    reject(customError.productNotFound);
                } else {

                    sq = `UPDATE products SET status=1 WHERE id=${req.params.id}`;
                    sql.query(sq, (err, rows, result) => {
                        if (!err) {
                            resolve({
                                error: false,
                                details: rows
                            });
                        } else {
                            // console.log(err);
                            reject(
                                mess = new Custom('Database error', err.code, 401)

                            );
                        }
                    });

                }
            });



        })
    }
    deleteProducts(req, res, next).then(message => {
        res.json(message);
    }).catch(error => {
        // console.log(error);
        res.status(error.code).json({
            error: true,
            details: error
        });
    })

}