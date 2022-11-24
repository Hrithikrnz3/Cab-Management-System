const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');

const booking = db.sequelize.define('bookingDetails',
{
    bookingId : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    dateOfBooking : {
        type : DataTypes.DATE,
        allowNull : false
    },
    cabFrom : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    cabTo : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    bookingTime : {
        type : DataTypes.TIME,
        allowNull : false
    },
    cabNo : {
        type : DataTypes.INTEGER,
        references : {
            model:'cabDetails',
            key : 'cabNo'
        }
    },
    cost : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    passengerId : {
        type : DataTypes.INTEGER,
        references : {
            model:'passengers',
            key : 'Passenger_id'
        }
    },
    driverId : {
        type : DataTypes.INTEGER,
        references : {
            model : 'drivers',
            key : 'driver_Id'
        }
    }
})

module.exports = booking;