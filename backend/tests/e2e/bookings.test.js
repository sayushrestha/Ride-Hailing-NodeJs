

const app = require('../../index')
const request = require('supertest')(app)


test('should get all bookings', async () => {
    const getAllResponse = await request
        .get('/bookings')
        .expect(200);
    
});


test('should search bookings based on query parameter', async ()=> {
const searchResponse = await request
    .get('/bookings/search?origin=Moda')
    .expect(200)


}) 