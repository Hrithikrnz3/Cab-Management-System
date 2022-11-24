const express = require('express');
const pc = require('../controllers/passengerController');
const router = express.Router('{}');
router.get('/passenger',pc.getAll);
router.get('/passenger/:id',pc.getOne);
router.post('/passenger',pc.addOne);
// router.post('/passenger/:id',pc.updateOne);
module.exports = router;