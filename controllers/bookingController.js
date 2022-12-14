const db = require('../models/booking')
const cabDb = require('../models/cabDetails');
const routeCostDb = require('../models/routeCost');
const sequelize = require('sequelize');


module.exports.booking = async (req,res,next)=>
{
    var route = await routeCostDb.findAll()
    // res.render('booking',{
    //     data: route,
    //     profile : req.identity.passenger
    // });

    routeCostDb.findAll( {
        attributes : [
            [sequelize.fn('DISTINCT', sequelize.col('from')) ,'from'],
        ]

    }).then(result=>{
        res.render('booking', {
            data: route,
            pickup : result,
            profile : req.identity.passenger
        });

    })
}

module.exports.bookingPost =  (req,res,next)=>
{
    const{pickUp,drop, date, time} = req.body;
    
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
        data : paymentDetails,
        profile:req.identity.passenger
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
                    cost:newResult.cost,
                    profile : req.identity.passenger
                })
            })
            
        })
}

module.exports.viewBooking = (req, res, next) => {

    db.findAll().then(result => {
        res.render('viewBookings',{
            data :  result,
            profile : req.identity.passenger
        } )

    })
    
}

module.exports.sreachBookingByDate = async (req, res, next)=>{
    date = req.body.date
    allbookings = await db.findAll({
        where : {
            dateOfBooking : date
        }
    }
        
    )

    if (allbookings.length != 0) {
        res.render('viewBookings',{
            data : allbookings
        })
        
    }
    else{
         let isFound = 1;
         db.findAll().then(result => 
            {
                res.render('viewBookings',{
                    data : result,
                    found : isFound
                })
            })

    }
}

