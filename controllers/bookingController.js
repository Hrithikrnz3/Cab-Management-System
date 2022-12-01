const db = require('../models/booking')
const cabDb = require('../models/cabDetails');

module.exports.booking = (req,res,next)=>
{
    res.render('booking');
}

module.exports.bookingPost = async (req,res,next)=>
{
    var driverId;
    const{pickUp,drop, date, time} = req.body;
    cabDb.findByPk(req.params.cabNo).then((result)=>
    {
       db.create({
        dateOfBooking : date,
        cabFrom : pickUp,
        cabTo : drop,
        bookingTime : time,
        passengerId : req.identity.passenger.id,
        cabNo : req.params.cabNo,
        driverId : result.driverId,
        cost:5000
       })
    })
    
    res.redirect('/payment/'+req.params.cabNo);
}

module.exports.payment = async (req,res,next) =>
{
    var paymentDetails = await db.findOne({where : {cabNo : req.params.cabNo}});
    res.render('payment',
    {
        data : paymentDetails
    })
}

module.exports.paymentInvoice = (req,res,next) =>
{
    res.render('bookingInvoice');
}