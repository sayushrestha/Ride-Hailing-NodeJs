const BaseDatabase = require('./base-database')
const Passenger = require('../models/passenger')
const bookingDatabase = require('./booking-database')
const driverDatabase = require('./driver-database')

class PassengerDatabase extends BaseDatabase {
  async findByName(name) {
    return this.findBy('name', name)
  }
  async book(driverId, passengerId, origin, destination) {
    console.log('book', ...arguments)
    const passenger = await this.find(passengerId)
    const driver = await driverDatabase.find(driverId)
    
    const booking = await bookingDatabase.insert({driver, passenger, origin, destination })
    passenger.bookings.push(booking)
    await passenger.save()
    return booking
  }
  
}

module.exports = new PassengerDatabase(Passenger)
