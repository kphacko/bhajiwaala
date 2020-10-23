const sql = require('../../connection');
const customError = require('../custom/errors');
const Custom = require('../custom/error');
const functions = require('../custom/function');

// action to get hotels

exports.getHotel = async(req, res, next) => {
    try {

        let hotels = await functions.querySingle('SELECT * FROM hotel WHERE status = 0');
        // console.log(hotels);
        // res.send(hotels);
        return hotels;

    } catch (error) {
        // res.send(error);
        return error;

    }

}

exports.getHotels = async(req, res, next) => {
    try {

        let hotels = await functions.querySingle('SELECT * FROM hotel WHERE status = 0');
        // console.log(hotels);
        res.send(hotels);
        // return hotels;

    } catch (error) {
        res.send(error);
        // return error;

    }

}
exports.getHotelByid = async(id) => {
    try {

        let hotels = await functions.querySingle(`SELECT * FROM hotel WHERE id =${id}`);
        // console.log(hotels);
        // res.send(hotels);
        return hotels;

    } catch (error) {
        // res.send(error);
        return error;

    }

}



//action add hotel 
exports.addHotel = async(req, res, next) => {

    function addHotel(req, res, next) {

        return new Promise((resolve, reject) => {

            const { name, phone, gstin, email } = req.body;
            // console.log(name, phone);
            if ( !name || !phone ||  phone.length != 10) {

                if (phone.length != 10) {
                    reject(mess = new Custom('Data is incorrect', 'Phone number should be 10 digit!!', 401));
                } else {
                    reject(customError.dataInvalid);
                }

            } else {
                sql.query(`SELECT * FROM hotel WHERE status=0 AND phone = ${req.body.phone} OR email= '${req.body.email}'`, (err, results) => {
                    if (results[0]) {
                        reject(customError.userExists);
                    } else {
                        var data = [
                            [
                                req.body.name,
                                req.body.email,
                                req.body.phone,
                                req.body.gstin
                            ]
                        ];

                        sq = 'INSERT INTO hotel (name,email,phone,gstin) VALUES ?';
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
    addHotel(req, res, next).then(message => {
        // res.json(message);
        res.status(200).redirect('/interact/addHotel?status=Added');

    }).catch(error => {
        // console.log(error);
        // res.status(error.code).json({
        //     error: true,
        //     details: error
        // });
        res.status(200).redirect(`/interact/addHotel?status=Error&message=${error}`);

    })

}

//action to edit hotel 

exports.editHotel = async(req, res, next) => {
    function editHotel(req, res, next) {
        return new Promise((resolve, reject) => {

            const { name, phone, gstin, email, id } = req.body;
            // console.log(name, phone);
            if ( !name || !phone || phone.length != 10 || !id) {
                if (phone.length != 10) {
                    reject(mess = new Custom('Data is incorrect', 'Phone number should be 10 digit!!', 401));
                } else {
                    reject(customError.dataInvalid);
                }

            } else {
                sql.query(`SELECT * FROM hotel WHERE status=0 AND id = ${req.body.id}`, (err, results) => {
                    if (!results[0]) {
                        reject(customError.userNotFound);
                    } else {
                        let data = `name='${req.body.name}',email='${req.body.email}',phone=${req.body.phone},gstin='${req.body.gstin}'`
                        sq = ` UPDATE hotel SET ${data} WHERE id=${req.body.id}`;
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
    editHotel(req, res, next).then(message => {
        // res.json(message);
        res.status(200).redirect('/interact/editdeleteHotel?status=Updated');

    }).catch(error => {
        // console.log(error);
        // res.status(error.code).json({
        //     error: true,
        //     details: error
        // });
        res.status(200).redirect(`/interact/editdeleteHotel?status=Error&message=${error}`);

    })

}

//action to delete hotel 

exports.deleteHotel = async(req, res, next) => {
    function deleteHotel(req, res, next) {
        return new Promise((resolve, reject) => {


            if (!req.params.id) reject(mess = new Custom('Data is incorrect', 'Send appropriate id!!', 401));
            sql.query(`SELECT * FROM hotel WHERE status=0 AND id = ${req.params.id}`, (err, results) => {
                // console.log(err);

                if (!results[0]) {
                    reject(customError.userNotFound);
                } else {

                    sq = `UPDATE hotel SET status=1 WHERE id=${req.params.id}`;
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
    deleteHotel(req, res, next).then(message => {
        // res.json(message);
        res.status(200).redirect('/interact/editdeleteHotel?status=Deleted');

    }).catch(error => {
        // console.log(error);
        // res.status(error.code).json({
        //     error: true,
        //     details: error
        // });
        res.status(200).redirect(`/interact/editdeleteHotel?status=Error&message=${error}`);

    })

}


// action to get hotels

exports.getVendor = async(status) => {
    try {

        let hotels = await functions.querySingle('SELECT * FROM vendor WHERE status = 0');
        // console.log(hotels);
        // res.send(hotels);
        return hotels;

    } catch (error) {
        // res.send(error);
        return error;

    }
}
exports.getVendors = async(req, res, next) => {
    try {

        let hotels = await functions.querySingle('SELECT * FROM vendor WHERE status = 0');
        // console.log(hotels);
        res.send(hotels);
        // return hotels;

    } catch (error) {
        res.send(error);
        // return error;

    }
}
exports.getVendorByid = async(id) => {
    try {

        let Vendor = await functions.querySingle(`SELECT * FROM vendor WHERE id =${id}`);
        // console.log(hotels);
        // res.send(hotels);
        return Vendor;

    } catch (error) {
        // res.send(error);
        return error;

    }

}

//action to add Vendor 

exports.addVendor = async(req, res, next) => {
    function addVendor(req, res, next) {
        return new Promise((resolve, reject) => {


            const { name, phone, gstin, email } = req.body;
            // console.log(name, phone);
            if (!name || !phone || phone.length != 10) {

                if (phone.length != 10) {
                    reject(mess = new Custom('Data is incorrect', 'Phone number should be 10 digit!!', 401));
                } else {
                    reject(customError.dataInvalid);
                }

            } else {
                sql.query(`SELECT * FROM vendor WHERE status=0 AND phone = ${req.body.phone} OR email= '${req.body.email}'`, (err, results) => {
                    if (results[0]) {
                        reject(customError.userExists);
                    } else {
                        var data = [
                            [
                                req.body.name,
                                req.body.email,
                                req.body.phone,
                                req.body.gstin
                            ]
                        ];

                        sq = 'INSERT INTO vendor (name,email,phone,gstin) VALUES ?';
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
    addVendor(req, res, next).then(message => {
        // res.json(message);
        res.status(200).redirect('/interact/addVendor?status=Added');

    }).catch(error => {
        // console.log(error);
        // res.status(error.code).json({
        //     error: true,
        //     details: error
        // });
        res.status(200).redirect(`/interact/addVendor?status=Error&message=${error}`);

    })

}

//action to edit Vendor 

exports.editVendor = async(req, res, next) => {
    function editVendor(req, res, next) {
        return new Promise((resolve, reject) => {

            const { name, phone, gstin, email, id } = req.body;
            // console.log(name, phone);
            if ( !name || !phone  || phone.length != 10 || !id) {
                if (phone.length != 10) {
                    reject(mess = new Custom('Data is incorrect', 'Phone number should be 10 digit!!', 401));
                } else {
                    reject(customError.dataInvalid);
                }

            } else {
                sql.query(`SELECT * FROM vendor WHERE status=0 AND id = ${req.body.id}`, (err, results) => {
                    if (!results[0]) {
                        reject(customError.userNotFound);
                    } else {
                        let data = `name='${req.body.name}',email='${req.body.email}',phone=${req.body.phone},gstin='${req.body.gstin}'`
                        sq = ` UPDATE vendor SET ${data} WHERE id=${req.body.id}`;
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
    editVendor(req, res, next).then(message => {
        // res.json(message);
        res.status(200).redirect('/interact/editdeleteVendor?status=Updated');

    }).catch(error => {
        // console.log(error);
        // res.status(error.code).json({
        //     error: true,
        //     details: error
        // });
        res.status(200).redirect(`/interact/editdeleteVendor?status=Error&message=${error}`);

    })

}


//action to delete Vendor 

exports.deleteVendor = async(req, res, next) => {
    function deleteVendor(req, res, next) {
        return new Promise((resolve, reject) => {

            if (!req.params.id) reject(mess = new Custom('Data is incorrect', 'Send appropriate id!!', 401));
            sql.query(`SELECT * FROM vendor WHERE status=0 AND id = ${req.params.id}`, (err, results) => {
                // console.log(err);

                if (!results[0]) {
                    reject(customError.userNotFound);
                } else {

                    sq = `UPDATE vendor SET status=1 WHERE id=${req.params.id}`;
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
    deleteVendor(req, res, next).then(message => {
        // res.json(message);
        res.status(200).redirect('/interact/editdeleteVendor?status=Deleted');

    }).catch(error => {
        // console.log(error);
        // res.status(error.code).json({
        //     error: true,
        //     details: error
        // });
        res.status(200).redirect(`/interact/editdeleteVendor?status=Error&message=${error}`);

    })

}