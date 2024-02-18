const colors = require('colors')

function printBooking(booking) {
  console.log(`${colors.blue(booking.passenger.name)} booked ${colors.blue(booking.driver.name)} to travel from ${colors.bgRed.white(booking.origin)} to ${colors.bgRed.white(booking.destination)}`)
}

function printBookingHistory(passenger) {
  if (!passenger || !passenger.bookings || passenger.bookings.length === 0) {
    return console.log(`${colors.blue(passenger.name)} has no bookings yet.`);
  }

  passenger.bookings.forEach(printBooking);
}



module.exports = {
  sum: (a,b) => a+b,
  subtrack: (a,b) => a-b,
  multiply: (a,b) => a*b,
  printBookingHistory: printBookingHistory
};