const Booking = require('./booking')
const mongoose = require('mongoose')
const PassengerSchema = new mongoose.Schema({
  name: String,
  location: String,
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    autopopulate: true
  }]
});

PassengerSchema.methods.book = async function(driver, origin, destination) {
  console.log('book', ...arguments)
  const booking = await Booking.create({driver, passenger:this, origin, destination })
  this.bookings.push(booking)
  await this.save()
  return booking
}


PassengerSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Passenger', PassengerSchema)
