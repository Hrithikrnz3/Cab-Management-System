const express = require('express');
const bc = require('../controllers/bookingController');
const router = express.Router({});
router.get('/booking',bc.getAll);
router.get('/booking/:id',bc.getOne);
router.post('/booking',bc.addOne);

module.exports = router;