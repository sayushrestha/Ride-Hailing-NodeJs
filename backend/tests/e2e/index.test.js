const app = require('../../index'); 
const request = require('supertest')(app);

describe('Index route', () => {
    it('should return status code 200 and render index page', async () => {
        const response = await request.get('/');
        
        expect(response.status).toBe(200);
        
    });
});
