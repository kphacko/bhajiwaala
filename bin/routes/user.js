const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const { checkAdmin } = require('../middleware/auth');

//some action to login user
router.post('/login', userController.login);
router.get('/login', (req, res) => {
    res.render('login', { data: 'empty' });
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/user/login');
});
//some action to login user
router.post('/register', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, userController.register);
router.post('/updateAsis', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, userController.updateAsistant);

module.exports = router;