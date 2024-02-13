const Booking = require('./booking')
const mongoose = require('mongoose')
const PassengerSchema = new mongoose.Schema({
  name: String,
  location: String,
  bookings: [{
    type: mongoose.Types.ObjectId,
    ref: 'Booking'
  }]
});

PassengerSchema.methods.book = async function(driver, origin, destination) {
  console.log('book', ...arguments)
  const booking = await Booking.create({driver, passenger:this, origin, destination })
  this.bookings.push(booking)
  await this.save()
  return booking
}

module.exports = mongoose.model('Passenger', PassengerSchema)
