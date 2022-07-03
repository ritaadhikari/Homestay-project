var mongoose= require('mongoose');

const bookingSchema = mongoose.Schema({

    bookingName : String,
    homestayId : Number,
    contact : Number,
    email : String,
    checkIn: Date,
    checkOut: Date,
    noOfPeople: Number
});


module.exports = mongoose.model('Bookings', bookingSchema)

