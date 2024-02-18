const passenger = require('../../models/passenger')
const {printBookingHistory} = require('../print-booking-history')
const colors = require('colors')



test('prints passenger bookings', ()=>{
    const passenger = {
        name: 'Hilal',
        bookings: [
            {
            passenger: {name: 'hilal'},
            driver: {name: 'stefan'},
            origin: 'Kayseri',
            destination: 'Mugla'
            }

        ]
    }
    const consoleSpy = jest.spyOn(console, 'log')
   
    printBookingHistory(passenger)

    expect(consoleSpy).toHaveBeenCalledWith('hilal booked stefan to travel from Kayseri to Mugla')
 
    
    consoleSpy.mockRestore()
})