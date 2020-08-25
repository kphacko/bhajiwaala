const bcrypt = require('bcryptjs');
const sql = require('../../connection');
const customError = require('../custom/errors');
const Custom = require('../custom/error');

exports.login = async(req, res, next) => {
    function login(req, res, next) {
        return new Promise((resolve, reject) => {
            const { phone, password, } = req.body;
            if (!phone || !password) {
                reject({
                    error: customError.dataInvalid,
                    page: 'login',
                    data: {
                        loginStatus: 'empty'
                    }
                })
            } else {

                sql.query(`SELECT * FROM user WHERE phone = '${phone}' OR email = '${phone}'`, async function(err, results) {
                    if (results.length === 0) {
                        reject({
                            error: customError.authFailed
                        });
                    } else {
                        const userValidated = await bcrypt.compare(password, results[0].password);
                        if (!userValidated) {
                            reject({
                                error: customError.authFailed
                            });
                        } else {
                            // console.log(results);
                            req.session.login = true;
                            req.session.phone = results[0].phone;
                            // req.session.data = results[0];
                            //    res.redirect(req.baseUrl);
                            req.session.u_id = results[0].id;
                            req.session.role = results[0].privilege;
                            req.session.email = results[0].email;
                            resolve({
                                error: {
                                    code: 200
                                },
                                req: req
                            });
                        }
                    }
                });
            }
        })
    }
    login(req, res, next).then(message => {
        // console.log(message.data);
        if (req.session.role==='admin') {
        res.status(message.error.code).redirect('/');
            
        }else{
            res.status(message.error.code).redirect('/order/addOrder');
        }
    }).catch(error => {
        // console.log(error);
        res.status(error.error.code).redirect(`/user/login?status=invalid`);
    })

}

exports.register = async(req, res, next) => {
    function register(req, res, next) {
        return new Promise((resolve, reject) => {

            const { name, phone, password, privilege, email } = req.body;
            if (!email || !name || !phone || !password || !privilege || phone.length != 10 || password.length < 5) reject(customError.dataInvalid);

            sql.query(`SELECT * FROM user WHERE phone = ${req.body.phone} OR email= '${req.body.email}'`, (err, results) => {

                // console.log(err);
                // console.log(results);
                if (results[0]) {
                    reject(customError.userExists);
                } else {
                    bcrypt.genSalt(parseInt(process.env.SALT, 10), function(err, salt) {
                        bcrypt.hash(req.body.password, salt, function(err, hashedPassword) {

                            var data = [
                                [
                                    hashedPassword,
                                    req.body.phone,
                                    req.body.name,
                                    req.body.email,
                                    req.body.privilege
                                ]
                            ];
                            sq = 'INSERT INTO user (password,phone,name,email,privilege) VALUES ?';
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
                        });
                    });
                }

            });

        });
    }

    register(req, res, next).then(message => {
            res.send(message);
        })
        .catch(error => {
            // console.log(error.code);
            res.status(error.code).json({
                error: true,
                details: error
            });
        })
}