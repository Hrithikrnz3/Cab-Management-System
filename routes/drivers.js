const express = require('express');
const dc = require('../controllers/driverController');
const router = express.Router('{}');

router.get('/driverDetails',dc.driverDetails);

router.get('/addNewDriver',dc.addDriver);
router.post('/addNewDriver',dc.saveDriver);

router.get('/editDriver/:driver_Id',dc.editDriver);
router.post('/editDriver/:driver_Id',dc.editDriverPost);

router.get('/deleteDriver/:driver_Id',dc.deleteDriver);

module.exports = router;