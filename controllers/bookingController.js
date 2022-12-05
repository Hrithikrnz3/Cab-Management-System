const db = require('../models/booking')
const cabDb = require('../models/cabDetails');
const routeCostDb = require('../models/routeCost'); 

module.exports.booking = async (req,res,next)=>
{
    var route = await routeCostDb.findAll()
    res.render('booking',{
        data: route
    });
}

module.exports.bookingPost =  (req,res,next)=>
{
    const{pickUp,drop, date, time} = req.body;
    console.log("🛴🛴🛴🛴🛴🛴🛴🛴🛴");

    console.log(req.body.pickUp);
    console.log(req.body.drop);
    routeCostDb.findOne({
        where : {
            from : req.body.pickUp,
            to : req.body.drop
        }
    }).then(result => {
        console.log(result);
        cabDb.findByPk(req.params.cabNo).then((cabDetails)=>
        {
           db.create({
            dateOfBooking : date,
            cabFrom : pickUp,
            cabTo : drop,
            bookingTime : time,
            passengerId : req.identity.passenger.id,
            cabNo : req.params.cabNo,
            driverId : cabDetails.driverId,
            cost:result.cost
           }).then(result => {
            console.log("🚉🚉🚉🚉🚉🚉🚉🚉")
            res.redirect('/payment/'+result.bookingId);
        })
        })

    })
    
}

module.exports.payment = async (req,res,next) =>
{
    var paymentDetails = await db.findOne({where : {bookingId : req.params.bookingId}});
    res.render('payment',
    {
        data : paymentDetails
    })
}

module.exports.paymentInvoice = async (req,res,next) =>
{
    db.findOne({
        where : {
            bookingId : req.params.bookingId
        }
    }).then(result=>
        {
            routeCostDb.findOne({
                where : {
                    from : result.cabFrom,
                    to : result.cabTo
                }
            }).then(newResult => {
                let name = req.identity.passenger.firstName + " " + req.identity.passenger.lastName
                res.render('bookingInvoice',{
                    invoice : result,
                    passengerName : name,
                    cost:newResult.cost
                })
            })
            
        })
}
