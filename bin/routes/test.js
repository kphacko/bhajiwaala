const express = require('express');
const router = express.Router();
const sql = require('../../connection');

router.get('/',(req,res)=>{
 sql.query('SELECT * from user',(err,rows,fields)=>{
     if(!err){
         res.send(rows);

     }else{
console.log(err);
     }
 });
});

router.post('/products',(req,res)=>{
    sq='INSERT INTO products (user_id,name,marathi,hindi,weight_type) VALUES ?';
    val=[
        [1,req.body.name,req.body.marathi,req.body.hindi,req.body.wt],
    ];
    sql.query(sq,[val],(err,result)=>{
        if(!err){
            res.status(202).send((result.affectedRows).toString());
        }else{
console.log(err);
        }
    });
});

router.put('/products/:id',(req,res)=>{
    const id = req.params.id;
console.log(req.body.name);
    sq = 'UPDATE products SET name ="'+req.body.name+'" where id='+id;
    sql.query(sq,(err,result)=>{
        if(!err){
            res.status(202).send('record updated');
        }else{

        }
    });
});

module.exports = router;