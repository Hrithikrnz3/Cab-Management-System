const express = require('express');
const dc = require('../controllers/driverController');
const router = express.Router('{}');
router.get('/driverDetails',dc.driverDetails);
router.get('/addNewDriver',dc.addDriver);
router.post('/addNewDriver',dc.saveDriver);

module.exports = router;