const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');

const Driver = db.sequelize.define('driver',{
    driver_Id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    driver_Licenece_No : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    driver_Name : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    driver_Password : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    driver_Email : {
        type : DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    driver_address:
    {
        type : DataTypes.STRING(50)
    },
    driver_dob : {
        type: DataTypes.DATE
    },
    driver_Gender:{
        type : DataTypes.STRING(7),
        allowNull:false
    }
})

module.exports = Driver;