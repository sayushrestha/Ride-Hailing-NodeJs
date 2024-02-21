const app = require('../..');
const request = require('supertest')(app);
const bookingService = require('../../services/booking-service');
const passengerToCreate = {
  name: 'Test passenger',
  location: 'Moda'
};

const driverToCreate = {
  name: 'Test driver',
  location: 'Moda',
  age: 18
};

test('creates a new booking and finds bookings by passenger ID', async () => {

  const origin = 'Moda';
  const destination = 'Bostanci';

  const passengerResponse = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200);

  const driverResponse = await request
    .post('/drivers')
    .send(driverToCreate)
    .expect(200);

  console.log('request', `/passengers/${passengerResponse.body._id}/bookings`);

  const bookingResponse = await request
    .post(`/passengers/${passengerResponse.body._id}/bookings`)
    .send({
      driverId: driverResponse.body._id,
      origin,
      destination
    })
    .expect(200);

  const bookingCreated = bookingResponse.body;

  expect(bookingCreated).toMatchObject({
    driver: driverResponse.body,
    passenger: passengerResponse.body,
    origin,
    destination
  });

  const passengerId = passengerResponse.body._id;
  const bookings = await bookingService.findByPassengerId(passengerId);

  expect(bookings).toBeDefined();
});


test('should find bookings by driver ID', async () => {

  const driverResponse = await request
    .post('/drivers')
    .send(driverToCreate)
    .expect(200);

  const passengerResponse = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200);

  const driverId = driverResponse.body._id; 
  const bookings = await bookingService.findByDriverId(driverId);

  expect(bookings).toBeDefined();

});
