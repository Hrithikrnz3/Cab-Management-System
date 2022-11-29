const express = require('express');
const bc = require('../controllers/bookingController');
const router = express.Router({});
router.get('/booking/:cabNo',bc.booking);
router.post('/booking/:cabNo',bc.bookingPost);
router.get('/payment/:cabNo',bc.payment);
module.exports = router;

