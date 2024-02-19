
const app = require('../index')// index
const request = require('supertest')(app)

test('creates a new booking', async ()=> {
    const passengerToCreate = {
        name: 'Test passenger',
        location: 'Moda'
      }
    const response = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200)

    console.log("*Do they match?*",response.body, passengerToCreate)
    
    const passengerCreated =  response.body

    expect(passengerCreated).toMatchObject(passengerToCreate)
    expect(passengerCreated.bookings).toEqual([])
    
    
}) 