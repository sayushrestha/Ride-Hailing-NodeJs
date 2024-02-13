const BaseDatabase = require('./base-database')
const Passenger = require('../models/passenger')
const BookingDatabase = require('./booking-database')

class PassengerDatabase extends BaseDatabase {
  async findByName(name) {
    return this.findBy('name', name)
  }
  async book(driver, passenger, origin, destination) {
    console.log('book', ...arguments)
    const booking = await BookingDatabase.insert({driver, passenger, origin, destination })
    passenger.bookings.push(booking)
    await passenger.save()
    return booking
  }
  
}

module.exports = new PassengerDatabase(Passenger)
