const app = require('../..')
const request = require('supertest')(app)
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('we are connected to mongodb!'); // Buraya taşındı
// });


test('creates a new booking', async () => {
  const passengerToCreate = {
    name: 'Test passenger',
    location: 'Moda'
  }

  const driverToCreate = {
    name: 'Test driver',
    location: 'Moda',
    age: 18
  }

  const origin = 'Moda'
  const destination = 'Bostanci'

  const passengerResponse = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200)

  const driverResponse = await request
    .post('/drivers')
    .send(driverToCreate)
    .expect(200)

  console.log('request', `/passengers/${passengerResponse.body._id}/bookings`)
  
  const bookingResponse = await request
    .post(`/passengers/${passengerResponse.body._id}/bookings`)
    .send({
      driverId: driverResponse.body._id,
      origin,
      destination
    })
    .expect(200)
  

  const bookingCreated = bookingResponse.body

  expect(bookingCreated).toMatchObject({
    driver: driverResponse.body,
    passenger: passengerResponse.body,
    origin,
    destination
  })

  
})


// afterAll(async () => {
//     await db.close();
//   });