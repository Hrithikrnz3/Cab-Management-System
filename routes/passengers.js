const express = require('express');
const pc = require('../controllers/passengerController');
const router = express.Router('{}');


// router.get('/passenger',pc.getAll);
// router.get('/passenger/:id',pc.getOne);
router.get('/register',pc.register);
router.post('/register',pc.registerPost);
router.get('/login',pc.login);
router.post('/login',pc.loginpost);
router.get('/passenger',pc.passengerDetail);
router.get('/home',pc.homePage);
router.get('/update',pc.updatePassenger);
router.post('/update',pc.updatePassengerPost);
router.get('/delete',pc.delete);
// router.get('/update/:id',pc.update);
// router.post('/update/:id',pc.updatePost);
// router.get('delete/:id',pc.delete);


module.exports = router;;
