var mongoose= require('mongoose');

const HomestaySchema = mongoose.Schema({
    homestayName: String,
    location:String,
    noOfRooms:Number,
    image : String,


    description : String,
    createdAt:{
        type:Date,
        defaut: new Date()
    },
    booked :{
        type:Number,
        default : 0
    }
});


module.exports = mongoose.model('Homestays', HomestaySchema)