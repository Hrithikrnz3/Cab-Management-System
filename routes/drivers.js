const express = require('express');
const dc = require('../controllers/driverController');
const router = express.Router('{}');
router.get('/driver',dc.getALL);
router.get('/driver/:id',dc.getOne);
router.post('/driver',dc.addOne);

module.exports = router;