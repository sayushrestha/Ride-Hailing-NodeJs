
const mongoose = require('mongoose')
const BookingSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  driver: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    autopopulate: true
  }],
  passenger: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Passenger',
    autopopulate: true
  }]

});

BookingSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Booking', BookingSchema)

