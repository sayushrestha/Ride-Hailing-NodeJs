const BaseService = require('../base-service'); 
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');

describe('BaseService', () => {
  let service;

  beforeAll(() => {
    const TestModel = mongoose.model('Test', new mongoose.Schema({  name: String,
    value: Number}));
    service = new BaseService(TestModel);
  });
  afterAll(async () => {
    await mongoose.connection.dropCollection('tests');
    await mongoose.connection.close(); 
  });
 
  it('should save multiple objects to the database', async () => {
    const objectsToSave = [{ name: 'Test 1', value: 1 }, { name: 'Test 2', value: 2 }];
    await service.save(objectsToSave);
    const savedObjects = await service.load()
    expect(savedObjects.length).toBe(objectsToSave.length);

    expect(savedObjects.map(obj => obj.name)).toEqual(expect.arrayContaining([objectsToSave[0].name, objectsToSave[1].name]));
    expect(savedObjects.map(obj => obj.value)).toEqual(expect.arrayContaining([objectsToSave[0].value, objectsToSave[1].value]));
  });
  
});