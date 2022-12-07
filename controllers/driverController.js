const { Result } = require('express-validator');
const db = require('../models/driver');

// module.exports.getAll = (req,res,next) => {
//     db.findAll()
//     .then(result => {
//         res.json(result);
//     })
// }

// module.exports.getOne = (req,res,next) => {
//     id = req.params.id;
//     db.findByPk(id).then(user=>
//         {
//             res.status(user==null?404:200);
//             res.json(user)
//         })
// }

// module.exports.addOne = (req,res,next) => {

//     db.create(
//         {

//             driver_Licenece_No : req.body.driver_Licenece_No,
//             driver_Name : req.body.driver_Name,
//             driver_Password : req.body.driver_Password,
//             driver_Email : req.body.driver_Email,
//             driver_address : req.body.driver_address,
//             driver_dob : req.body.driver_dob,
//             driver_Gender : req.body.driver_Gender
        
//         })
//     .then((user)=>
//     {
//         res.json(user);
//     })
// }

module.exports.driverDetails = (req,res,next) => 
{
    db.findAll().then(result => {
        res.render('driverDetails',{
            driverDetails : result,
            profile : req.identity.passenger
        })
    })
}

module.exports.addDriver = (req,res,next)=>
{
    res.render('addDriver',{
        profile:req.identity.passenger
    });
}

module.exports.saveDriver = (req,res,next) => 
{
    db.create({
        driverName : req.body.driverName,
        driverLiceneceNo : req.body.driverLiceneceNo,
        driverEmail : req.body.driverEmail,
        driverAddress : req.body.driverAddress,
        driverDob : req.body.driverDob,
        driverGender : req.body.driverGender
    }).then(res.redirect('/driverDetails'))
}

module.exports.editDriver = (req, res, next) => {
    driver_Id = req.params.driver_Id;
    db.findByPk(driver_Id).then(
        result => {
            res.render('editDriver',{
                driverDetails : result,
                profile: req.identity.passenger
            })
        }
    )
}

module.exports.editDriverPost =async (req, res, next) => {
    await db.update({
        driverName : req.body.driverName,
        driverLiceneceNo : req.body.driverLiceneceNo,
        driverEmail : req.body.driverEmail,
        driverAddress : req.body.driverAddress,
        driverDob : req.body.driverDob,
        driverGender : req.body.driverGender
    },
    {
       where : {
        driver_Id : req.params.driver_Id
       } 
    }).then(
        res.redirect('/driverDetails')
    )
}

module.exports.deleteDriver = (req, res, next) => 
{
    db.destroy({
        where : {driver_Id : req.params.driver_Id}
    }).then(
        res.redirect('/driverDetails')
    )
}