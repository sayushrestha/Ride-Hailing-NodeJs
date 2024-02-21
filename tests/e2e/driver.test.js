const app = require('../../index'); 
const request = require('supertest')(app);

describe('Driver routes', () => {
  let newDriverId;

  it('should create a new driver', async () => {
    const newDriver = {
      name: 'Test Driver',
      location: 'Test Location 2',
      age: 25
    };
    const response = await request.post('/drivers').send(newDriver);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(newDriver);
    newDriverId = response.body._id; 
  });

  it('should get all drivers', async () => {
    const response = await request.get('/drivers');
    expect(response.status).toBe(200);
  });



  // Young drivers route test
it('should get young drivers', async () => {
  const response = await request.get('/drivers/young-drivers');
  expect(response.status).toBe(200);
 
});

// Single driver route test
it('should get a single driver', async () => {
  const response = await request.get(`/drivers/${newDriverId}`);
  expect(response.status).toBe(200);
 
});

// Update driver route test
it('should update a driver', async () => {
  const updatedDriver = { name: 'Updated Driver Name' }; 
  const response = await request.patch(`/drivers/${newDriverId}`).send(updatedDriver);
  expect(response.status).toBe(200);
 
});


it('should delete a driver', async () => {
  const response = await request.delete(`/drivers/${newDriverId}`);
  expect(response.status).toBe(200);
});


});
