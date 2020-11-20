const bcrypt = require('bcryptjs');
const sql = require('../../connection');
const customError = require('../custom/errors');
const Custom = require('../custom/error');
const functions = require('../custom/function');
const CustomError = require('../custom/error');

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

                sql.query(`SELECT * FROM user WHERE phone = '${phone}' OR email = '${phone}' AND status = 0`, async function(err, results) {
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
                            req.session.org = results[0].orgName;

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

            const { name, phone, password, privilege } = req.body;
            if ( !name || !phone || !password || !privilege || phone.length != 10) reject(customError.dataInvalid);

            sql.query(`SELECT * FROM user WHERE phone = ${req.body.phone} OR email= '${req.body.email}' AND status = 0`, (err, results) => {

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
           res.status(200).redirect('/interact/addAsis?status=Added');
        })
        .catch(error => {
            // console.log(error.code);
             res.status(200).redirect(`/interact/addAsis?status=Error&message=${error}`);
        })
}


exports.getasistant = async(status) => {
    try {

        let users = await functions.querySingle('SELECT * FROM user WHERE status = 0');
        
        return users;

    } catch (error) {

        return error;

    }
}


exports.deleteAsistant = async(req, res) => {
    try {

        let users = await functions.querySingle(`SELECT * FROM user WHERE id =${req.params.id}`);
        if(!users) throw CustomError.userNotFound;
        await functions.querySingle(`UPDATE user SET status=1 WHERE id=${req.params.id}`);
       res.status(200).redirect('/interact/editdeleteAsistant?status=Deleted');

    } catch (error) {

      res.status(200).redirect(`/interact/editdeleteAsistant?status=Error&message=${error}`);

    }
}


exports.getasistantById = async(id) => {
    try {

        let users = await functions.querySingle(`SELECT * FROM user WHERE id = ${id}`);
        
        return users;

    } catch (error) {

        return error;

    }
}

exports.updateAsistant = async(req,res) => {
    try {
        const { id,name, phone, password, privilege ,orgName} = req.body;
        if (!id ||!name || !phone ||  !privilege || phone.length != 10) reject(customError.dataInvalid);
        let users = await functions.querySingle(`SELECT * FROM user WHERE id = ${id}`);
        if (!users) throw CustomError.userNotFound;
        let uPassword; 
        let UpdateUser;
        
        if (password) {
            bcrypt.genSalt(parseInt(process.env.SALT, 10), function(err, salt) {
                bcrypt.hash(req.body.password, salt,async function(err, hashedPassword) {
                     uPassword = hashedPassword;
                            })
                        })
         UpdateUser = await functions.querySingle(`UPDATE user SET name='${name}',phone=${phone},password='${uPassword}',privilege='${privilege}',orgName='${orgName}' WHERE id=${id}`);

        }else{
            UpdateUser = await functions.querySingle(`UPDATE user SET name='${name}',phone=${phone},privilege='${privilege}',orgName='${orgName}' WHERE id=${id}`);

        }

        res.status(200).redirect('/interact/editdeleteAsistant?status=Updated');

    } catch (error) {

              res.status(200).redirect(`/interact/editdeleteAsistant?status=Error&message=${error}`);


    }
}