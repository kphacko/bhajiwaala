const bcrypt = require('bcryptjs');
const sql = require('../../connection');
const customError = require('../custom/errors');
exports.login = async (req, res, next) => {

    try{
      
    const {  phone, password,} = req.body;
    if ( !phone || !password ) throw customError.dataInvalid;
} catch(error){
    return res.status(error.code).json({
        error: true,
        details: error
});
}
         sql.query(`SELECT * FROM user WHERE phone = '${req.body.phone}' OR email = '${req.body.phone}'`, async function(err, results) {
             
            try{
      
                
         
        
            const userValidated = await bcrypt.compare(req.body.password, results[0].password);
            if (!userValidated) throw customError.authFailed;
           

                   req.session.login = true;
                   req.session.phone = results[0].phone;
                   req.session.data = results[0];
                //    res.redirect(req.baseUrl);
                res.status(200).json({
                    error: false,
                    details : results
                });

            
            } catch(error){
                // console.log(error);
                return res.status(error.code).json({
                    error: true,
                    details: error
            });
        }
 
         });


     }

     exports.register = async (req, res, next) => {
    
    try{

        const { name, phone, password, privilege, email} = req.body;
 if (!email ||!name || !phone || !password || !privilege || phone.length !=10 || password.length < 5)   throw customError.dataInvalid;
            
     sql.query(`SELECT * FROM user WHERE phone = ${req.body.phone} OR email= '${req.body.email}'`,  (err, results) => {
        try{
            console.log(err);
            console.log(results);
            if(results[0]) throw  customError.userExists;

            bcrypt.genSalt(parseInt(process.env.SALT, 10), function (err, salt) {
                bcrypt.hash(req.body.password, salt, function (err, hashedPassword) {
        
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
                sql.query(sq, [data], (err,rows, result)=>{
                    if(!err){
                        res.status(200).json({
                            error: false,
                            details : rows
                        });
                    }else{
                        console.log(err);
                    }
                    
                });
            });
                
                });

        }catch(error){
            return res.status(error.code).json({
                error: true,
                details: error
            });
        }

    });
    
    
    
    
    
    }catch(error){
        return res.status(error.code).json({
            error: true,
            details: error
        });
    }
}
