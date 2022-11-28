const express = require('express');
const cdc = require('../controllers/cabDetailsController');
const router = express.Router({});
router.get('/cabs',cdc.availableCabs);
module.exports = router;