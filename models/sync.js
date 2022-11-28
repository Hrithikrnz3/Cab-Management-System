const Passenger = require('./passengers');
const Driver = require('./driver');
const cab = require('./cabDetails');
const Booking = require('./booking');

Driver.hasMany(cab, {foreignKey:'driverId'});
cab.belongsTo(Driver, {
    foreignKey:'driverId'
});

cab.hasMany(Booking, {foreignKey:'cabNo'});
Booking.belongsTo(cab,{
    foreignKey: 'cabNo'
});

Driver.hasMany(Booking, {foreignKey:'driverId'});
Booking.belongsTo(Driver,{
    foreignKey:'driverId'
});

Passenger.hasMany(Booking, {foreignKey:'passengerId'});
Booking.belongsTo(Passenger,{
    foreignKey:'passengerId'
});


// Passenger.sync();
// Driver.sync();
// cab.sync();
Booking.sync({alter:true});
