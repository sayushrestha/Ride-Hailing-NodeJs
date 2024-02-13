
const mongoose = require('mongoose')
const BookingSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  driver: {},
  passenger:{},

});

module.exports = mongoose.model('Booking', BookingSchema)

