//const { validationResult, body } = require('express-validator');
const { where } = require('sequelize');
const db = require('../models/passengers');
let id

module.exports.getAll = (req,res,next) => {
    db.findAll()
    .then(result => {
        res.json(result);
    })
}

module.exports.getOne = (req,res,next) => {
  id = req.params.id;
  console.log(id);
  db.findByPk(id).then(user=>
    {
        res.status(user==null?404:200);
        res.json(user);
    });
}

module.exports.addOne = (req,res,next) => {
    // const errors = validationResult(req);
    // if(!errors.isEmpty())
    // {
    //     return res.status(400)
    //     .json({
    //         errors: errors.array()
    //     });
    // }

    db.create(
        {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        mobile: req.body.mobile,
        dob: req.body.dob,
        gender: req.body.gender
    })
    .then((user)=>
    {
        res.json(user);
    })

}

module.exports.updateOne = (req,res,next)=>
{

    db.update({where: id=req.params.id},
        {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        mobile: req.body.mobile,
        dob: req.body.dob,
        gender: req.body.gender
    })
    .then((user)=>
    {
        res.json(user)
    })
}