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

//some action to delete hotel 
router.delete('/deleteHotel/:id', userController.deleteHotel);

//some action to get vendor
router.get('/getVendor/:id', userController.getVendor);

//some action to add hotel
router.post('/addVendor', userController.addVendor);
router.get('/addVendor', (req, res) => {
    res.render('addVendor');
});

//some action to edit hotel
router.patch('/editVendor', userController.editVendor);

//some action to delete hotel 
router.delete('/deleteVendor/:id', userController.deleteVendor);

module.exports = router;