const db = require('../models/cabDetails');
module.exports.availableCabs = (req,res,next) =>
{
    
    db.findAll().then(cabs=>{
        res.render('cabDetails',{
            cabDetails:cabs,
            data: req.identity.passenger
        });
    })
}

