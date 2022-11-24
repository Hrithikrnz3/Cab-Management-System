const express = require('express');
const cdc = require('../controllers/cabDetailsController');
const router = express.Router({});
router.get('/cab',cdc.getAll);
router.get('/cab/:id',cdc.getOne);
router.post('/cab',cdc.addOne);

module.exports = router;