require('dotenv/config');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysqlConnection = require('./connection');
const CustomError = require('./bin/custom/error');

const app = express();
app.use(express.json());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true, limit: '100mb' }));
app.use(require('body-parser').json({ limit: '100mb' }));

app.use(session({
    secret: "newkpsecretkey",
    resave: true,
    saveUninitialized: true
}));



//******* IMPORTING ROUTES *******\\
const userRoutes = require('./bin/routes/user');
const interactRoutes = require('./bin/routes/interact');
const productsRoutes = require('./bin/routes/products');





//******* USING THE IMPORTED ROUTES *******\\
app.use('/user', userRoutes);
app.use('/interact', interactRoutes);
app.use('/products', productsRoutes);
// app.use('/order', orderRoutes);
// app.use('/images', express.static('uploads/images'));



//******* ERROR HANDLING *******\\
app.use((req, res, next) => {
    const error = new CustomError('Not Found!', `Uh oh! the path you are trying to reach we can't find it, we've checked each an every corner!`, 404);
    next(error);

});

app.use((error, req, res, next) => {

    res.status(error.code || 500).json({
        error: true,
        details: error
    });
});





module.exports = app;