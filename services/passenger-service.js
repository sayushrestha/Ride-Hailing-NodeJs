const BaseService = require('./base-service')
const Passenger = require('../models/passenger')
const bookingService = require('./booking-service')
const driverService = require('./driver-service')

class PassengerService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name)
  }
  async book(driverId, passengerId, origin, destination) {
    console.log('book', ...arguments)
    const passenger = await this.find(passengerId)
    const driver = await driverService.find(driverId)
    
    const booking = await bookingService.insert({driver, passenger, origin, destination })
    passenger.bookings.push(booking)
    await passenger.save()
    return booking
  }
  
}

module.exports = new PassengerService(Passenger)
