const db = require('../models/cabDetails');
let id

module.exports.getAll = (req,res,next) =>
{
    db.findAll()
    .then(result => {
        res.json(result);
    })
}

module.exports.getOne = (req,res,next) => 
{
    id = req.params.id;
    db.findByPk(id).then(user => 
        {
            res.status(user==null?404:200);
            res.json(user);
        })
}

module.exports.addOne = (req,res,next) => 
{
    db.create(
        {
           cabName : req.body.cabName, 
           cabDescription : req.body.cabDescription,
           cabTotalCapacity : req.body.cabTotalCapacity,
           driverId : req.body.driverId
        })
        .then((user)=>
        {
            res.json(user);
        })
}