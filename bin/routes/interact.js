const express = require('express');
const router = express.Router();
const userController = require('../controller/interact');
const { checkAdmin } = require('../middleware/auth');

//some action to get hotel
router.get('/getHotel', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, userController.getHotels);

//some action to add hotel
router.post('/addHotel', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, userController.addHotel);
router.get('/addHotel', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, (req, res) => {

    if (req.query.status) {
        res.render('addHotel', { status: req.query.status, message: req.query.message, role: req.session.role });

    } else {
        res.render('addHotel', { status: 'empty', role: req.session.role });

    }
});
//some action to edit hotel
router.post('/editHotel', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, userController.editHotel);

router.get('/editHotel/:id', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let hotels = await userController.getHotelByid(req.params.id);
    // console.log(hotels);
    res.render('editHotel', { hotels: hotels, role: req.session.role })
});
router.get('/editdeleteHotel', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let hotels = await userController.getHotel();
    // console.log(hotels);
    if (req.query.status) {
        res.render('editdeleteHotel', { hotels: hotels, status: req.query.status, message: req.query.message, role: req.session.role });
    } else {
        res.render('editdeleteHotel', { hotels: hotels, status: 'empty', role: req.session.role });

    }
});

//some action to delete hotel 
router.get('/deleteHotel/:id', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, userController.deleteHotel);

// some action to get vendor
router.get('/getVendor', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, userController.getVendor);
router.get('/getVendors', (req, res, next) => { checkAdmin(req, res, next, ['admin', 'asistant'], 'login') }, userController.getVendors);


//some action to add vendor
router.post('/addVendor', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, userController.addVendor);
router.get('/addVendor', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, (req, res) => {
    if (req.query.status) {
        res.render('addVendor', { status: req.query.status, message: req.query.message, role: req.session.role });
    } else {
        res.render('addVendor', { status: 'empty', role: req.session.role });

    }
});

//some action to edit vendor
router.post('/editVendor', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, userController.editVendor);
router.get('/editdeleteVendor', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let vendors = await userController.getVendor('all');
    if (req.query.status) {
        res.render('editdeleteVendor', { vendors: vendors, status: req.query.status, message: req.query.message, role: req.session.role });
    } else {
        res.render('editdeleteVendor', { vendors: vendors, status: 'empty', role: req.session.role });

    }
});
router.get('/editVendor/:id', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, async(req, res) => {
    let vendors = await userController.getVendorByid(req.params.id);
    // console.log(hotels);
    res.render('editVendor', { vendors: vendors, role: req.session.role })
});
//some action to delete vendor 
router.get('/deleteVendor/:id', (req, res, next) => { checkAdmin(req, res, next, ['admin'], 'login') }, userController.deleteVendor);

module.exports = router;