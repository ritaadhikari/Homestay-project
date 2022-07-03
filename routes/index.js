var express = require('express');
const flash = require('connect-flash');
var router = express.Router();

var booking = require('../models/booking');
var Homestays = require('../models/homestay');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/homepage', function(req, res, next) {
  Homestays.find().exec(function (err, homestays){
    res.render('homepage', { messages: req.flash("success"),errors: req.flash("error"),homestayList: homestays} );
  });
  // res.render('homepage', { homestayList :});
});

router.get('/booking', function(req, res, next) {
  res.render('booking');
});

router.get('/events', function(req, res, next) {
  res.render('events');
});


router.get('/blogdetails',async function(req, res, next) {
  const detail = await booking.findOne({_id :req.params.id});
  res.render('blogdetails',{detail: detail});
});
router.get('/blogdetails1', function(req, res, next) {
  res.render('blogdetails1');
});


router.post('/save-booking', function(req, res, next){
  var book = new booking({
    bookingName : req.body.bookingName,
    contact : req.body.contact,
    email : req.body.email,
    noOfPeople : req.body.noOfPeople,
    checkIn : req.body.checkIn,
    checkOut : req.body.checkOut
  });
   book.save().then((book) => {
    req.flash("success","Booking Successful!")
    console.log("Booked: ", book);
    res.redirect('/homepage');
  }).catch(err => {
    req.flash("error","Error during Booking.")
    res.redirect('/homepage')
    console.log(err);
  });

});

router.get('/hometest', function(req, res, next) {
  res.render('home');
});

module.exports = router;
