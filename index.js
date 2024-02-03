const colors = require('colors')


const Passenger = require('./passenger')
const Driver = require('./driver')
const {passengerDatabase, driverDatabase} = require('./database') // ='./database'
// const passengerDatabase = require('./database/passenger-database')
// const driverDatabase = require('./database/driver-database')

const armagan = new Passenger(undefined, 'Armagan', 'Kreuzberg')
const mert = new Passenger(undefined,'Mert', 'Mitte')
const stefan = new Driver('Stefan', 'Treptower Park')

// const armagan3 = Passenger.create({name: 'Armagan', location: 'Kreuzberg'}) VALID
armagan.book(stefan, 'Kreuzberg', 'Neukolln')
armagan.book(stefan, 'Neukolln', 'Mitte')
armagan.book(stefan, 'Mitte', 'Kreuzberg')
armagan.book(stefan, 'Kreuzberg', 'SXF')
mert.book(stefan, 'Kreuzberg', 'SXF')

function printBooking(booking) {
  console.log(`${colors.blue(booking.passenger.name)} booked ${colors.blue(booking.driver.name)} to travel from ${colors.bgRed.white(booking.origin)} to ${colors.bgRed.white(booking.destination)}`)
}

function printBookingHistory(passenger) {
  if(passenger.bookings.length == 0){
    console.log(`${colors.blue(passenger.name)} has no bookings`)
  }
  passenger.bookings.forEach(printBooking);
}

// db.save('passenger', [{name: 'Armagan', location: 'Berlin'}])
// db.save('passengers', [armagan, mert])
// db.save('drivers', [stefan])
passengerDatabase.save([armagan, mert]);

driverDatabase.save([stefan]);

// console.log(armagan.bookings[0])
// db.save('passenger', [armagan])
// db.save('driver', [stefan])
// const passengers = db.load('passengers')
// passengers.forEach(printBookingHistory)
// const betul = new Passenger('betul', 'Tegel');
// db.insert('passengers', betul);
// db.remove('passengers', 3); // remove by index

const armagan2 = passengerDatabase.findByName('Armagan');

// armagan.book(stefan, 'SXF', 'TXL');

armagan2.book(stefan, 'Mitte', 'AEW');
passengerDatabase.update(armagan);
// printBookingHistory(armagan2);

const passengers = passengerDatabase.load()
passengers.forEach(printBookingHistory)
// const passengers = db.load('passengers');
// passengers.forEach(p => console.log(p.name));


// printBookingHistory(armagan)


//const armagan2 = passengers[0]; // we can not get passenger object

console.log(driverDatabase.findByDriverName('Stefan'))
console.log(driverDatabase.findByLocation('Treptower Park'))