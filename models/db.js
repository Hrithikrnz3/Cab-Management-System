const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize("cabManagementSystem","root","hrithik",
{
    host: "localhost",
    dialect:"mysql"
});

module.exports.sequelize = sequelize;