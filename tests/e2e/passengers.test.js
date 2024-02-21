const app = require('../../index'); // index
const request = require('supertest')(app);
let passengerId;

describe('Passenger operations', () => {
    it('should create a new passenger', async () => {
        // Create a new passenger
        const passengerToCreate = {
            name: 'Test Passenger',
            location: 'Moda'
        };
        const createResponse = await request
            .post('/passengers')
            .send(passengerToCreate)
            .expect(200);

        passengerId = createResponse.body._id;

        console.log("*Do they match?*", createResponse.body, passengerToCreate);

        const passengerCreated = createResponse.body;

        expect(passengerCreated).toMatchObject(passengerToCreate);
        expect(passengerCreated.bookings).toEqual([]);

    });

    it('should update a passenger', async () => {
      const updatedPassenger = { name: 'Updated Passenger Name' };
      const updateResponse = await request
      .patch(`/passengers/${passengerId}`)
      .send(updatedPassenger)
      .expect(200);

      console.log("Updated Passenger Response:", updateResponse.body);

      expect(updateResponse.body.name).toBe(updatedPassenger.name);
     
    });


    it('should get all passengers', async () => {
      const response = await request.get('/passengers');
      expect(response.status).toBe(200);
    });

    it('should get a single passenger', async () => {
      const response = await request.get(`/passengers/${passengerId}`);
      expect(response.status).toBe(200);
     
    });
    

    it('should delete a passenger', async () => {
      const response = await request.delete(`/passengers/${passengerId}`);
      expect(response.status).toBe(200);
    });
    
    it('should handle errors in creating a new passenger', async () => {
      const passengerToCreate = {
          location: 'Moda' // Missing 'name' field
      };

      const createResponse = await request
          .post('/passengers')
          .send(passengerToCreate)
          .expect(500); // Expecting a server error due to missing 'name' field
  
    
  });

  test('should find passengers by name', async () => {
    const passengerName = 'Test Passenger';
    
    const response = await request.get(`/passengers/find-by-name/${passengerName}`);
  
    expect(response.status).toBe(200);
    
    response.body.forEach(passenger => {
      expect(passenger.name).toBe(passengerName);
    });
  });
  


    
});
