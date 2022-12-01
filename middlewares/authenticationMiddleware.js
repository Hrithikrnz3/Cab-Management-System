const passenger = require('../models/passengers');

module.exports = async (req,res,next) => {
    req.identity = {
        isAuthenticated:false,
        passenger: null
    }
    if(req.url == "/login" || req.url =="/register")
    {
        return next();
    }
    let passengerId = req.session.passengerId;
    console.log(passengerId)
    if(!passengerId  || passengerId == null){
        return res.redirect("/login");
    }

    let passengerFromDb = await passenger.findByPk(passengerId);
    console.log(passengerFromDb)
    if(passengerFromDb == null)
    {
        return res.redirect("/login");
    }
    
    req.identity.isAuthenticated = true;
    req.identity.passenger = {
        id: passengerFromDb.dataValues.Passenger_id,
        firstName: passengerFromDb.dataValues.firstName,
        lastName: passengerFromDb.dataValues.lastName,
        email: passengerFromDb.dataValues.email,
        mobile:passengerFromDb.dataValues.mobile,
        dob:passengerFromDb.dataValues.dob,
        role : passengerFromDb.dataValues.role
    }
    next()
}