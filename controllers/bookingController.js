const db = require('../models/booking')

// module.exports.getAll = (req,res,next) => 
// {
//     db.findAll()
//     .then(result => {
//         res.json(result);
//     })
// }

// module.exports.getOne = (req,res,next) => {
//     id = req.params.id;
//     db.findByPk(id).then(user => 
//         {
//             res.status(user==null?404:200);
//             res.json(user);
//         })
// }

// module.exports.addOne = (req,res,next) =>
// {
//     db.create(
//         {
//             dateOfBooking : req.body.dateOfBooking,
//             cabFrom : req.body.cabFrom,
//             cabTo : req.body.cabTo,
//             bookingTime : req.body.bookingTime,
//             cabNo : req.body.cabNo,
//             cost : req.body.cost,
//             passengerId : req.body.passengerId,
//             driverId : req.body.driverId
//         }).then((user)=>
//         {
//             res.json(user)
//         })
// }

// module.exports.booking = (req,res,next) =>
// {
//     res.render('booking');
// }

// module.exports.bookingPost = (req,res,next) => 
// {
//     const {dateOFBooking,cabFrom,cabTo,bookingTime,cabNo,cost,passengerId,driverId}
// }