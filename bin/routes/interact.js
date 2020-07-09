const express = require('express');
const router = express.Router();
const userController = require('../controller/interact');

//some action to get hotel
router.get('/getHotel/:id', userController.getHotel);

//some action to add hotel
router.post('/addHotel', userController.addHotel);
router.get('/addHotel', (req, res) => {
    res.render('addHotel');
});
//some action to edit hotel
router.patch('/editHotel', userController.editHotel);
router.get('/editdeleteHotel', (req, res) => {
    res.render('editdeleteHotel')
});
//some action to delete hotel 
router.delete('/deleteHotel/:id', userController.deleteHotel);

//some action to get vendor
router.get('/getVendor/:id', userController.getVendor);

//some action to add vendor
router.post('/addVendor', userController.addVendor);
router.get('/addVendor', (req, res) => {
    res.render('addVendor');
});

//some action to edit vendor
router.patch('/editVendor', userController.editVendor);
router.get('/editdeleteVendor', (req, res) => {
    res.render('editdeleteVendor');
});

//some action to delete vendor 
router.delete('/deleteVendor/:id', userController.deleteVendor);

module.exports = router;