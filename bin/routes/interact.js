const express = require('express');
const router = express.Router();
const userController = require('../controller/interact');

//some action to get hotel
router.get('/getHotel', userController.getHotels);

//some action to add hotel
router.post('/addHotel', userController.addHotel);
router.get('/addHotel', (req, res) => {

    if (req.query.status) {
        res.render('addHotel', { status: req.query.status, message: req.query.message });

    } else {
        res.render('addHotel', { status: 'empty' });

    }
});
//some action to edit hotel
router.post('/editHotel', userController.editHotel);

router.get('/editHotel/:id', async(req, res) => {
    let hotels = await userController.getHotelByid(req.params.id);
    // console.log(hotels);
    res.render('editHotel', { hotels: hotels })
});
router.get('/editdeleteHotel', async(req, res) => {
    let hotels = await userController.getHotel();
    // console.log(hotels);
    if (req.query.status) {
        res.render('editdeleteHotel', { hotels: hotels, status: req.query.status, message: req.query.message });
    } else {
        res.render('editdeleteHotel', { hotels: hotels, status: 'empty' });

    }
});

//some action to delete hotel 
router.get('/deleteHotel/:id', userController.deleteHotel);

// some action to get vendor
router.get('/getVendor', userController.getVendor);
router.get('/getVendors', userController.getVendors);


//some action to add vendor
router.post('/addVendor', userController.addVendor);
router.get('/addVendor', (req, res) => {
    if (req.query.status) {
        res.render('addVendor', { status: req.query.status, message: req.query.message });
    } else {
        res.render('addVendor', { status: 'empty' });

    }
});

//some action to edit vendor
router.post('/editVendor', userController.editVendor);
router.get('/editdeleteVendor', async(req, res) => {
    let vendors = await userController.getVendor('all');
    if (req.query.status) {
        res.render('editdeleteVendor', { vendors: vendors, status: req.query.status, message: req.query.message });
    } else {
        res.render('editdeleteVendor', { vendors: vendors, status: 'empty' });

    }
});
router.get('/editVendor/:id', async(req, res) => {
    let vendors = await userController.getVendorByid(req.params.id);
    // console.log(hotels);
    res.render('editVendor', { vendors: vendors })
});
//some action to delete vendor 
router.get('/deleteVendor/:id', userController.deleteVendor);

module.exports = router;