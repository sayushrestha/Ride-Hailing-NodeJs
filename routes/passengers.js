const flatted = require('flatted')
const Passenger = require('../models/passenger')
const {passengerService, driverService, bookingService} = require('../services')


const router = require('express').Router()

router.get('/', async(req, res)=> {
    const passengers = await passengerService.load()
    res.render('passengers', {passengers}) // res.render
})

// axios.post('/passengers', { name: "Hilal", location: "Frankfurt"}).then(res=> res.data).then(console.log).catch(console.log)
router.post('/', async(req, res)=> {
    const passenger = await passengerService.insert(req.body);
    res.send(passenger)
})


router.delete('/:passengerId', async(req, res) => {
    await passengerService.removeBy('_id', req.params.passengerId)
    res.send('OK')
})

//http://localhost:3000/passenger/d009af8b-b539-466e-ac71-f17037af92a6
router.get('/:passengerId', async(req, res)=> {
    const passenger = await passengerService.find(req.params.passengerId)
    console.log(passenger.bookings)
    if (!passenger) return res.status(404).send('Can not find passenger')
    res.render('passenger', {passenger})
})

//axios.post('/passengers/1d864de0-9e9a-4891-85ac-de091d5b1b7f/bookings?driverId=eb11c6b9-6d5f-4e93-8ebf-2f6f275f40f3').then(res=>console.log(res.data)).catch(err=> console.log(err))

//axios.post('/passengers/1d864de0-9e9a-4891-85ac-de091d5b1b7f/bookings?driverId=eb11c6b9-6d5f-4e93-8ebf-2f6f275f40f3&origin=Kreuzberg&destination=TXL').then(res=>console.log(res.data)).catch(err=> console.log(err))

/*
axios.post('/passengers/1d864de0-9e9a-4891-85ac-de091d5b1b7f/bookings', {
  driverId: 'eb11c6b9-6d5f-4e93-8ebf-2f6f275f40f3',
  origin: 'TXL',
  destination: 'Mitte'
})
  .then(res => console.log(res.data))
  .catch(err => console.log(err)) */
// const driver = await driverService.find(req.query.driverId)

router.post('/:passengerId/bookings', async(req, res)=> {
    const { passengerId }= req.params
    const { driverId, origin, destination } = req.body

    const passenger = await passengerService.find(passengerId)

    
    const driver = await driverService.find(driverId)
    const booking = await passengerService.book(driver, passenger, origin, destination) // TO DO look
  
    res.send(flatted.stringify(booking))

})

// change one property of one record
router.patch('/:passengerId', async (req, res) => {
    const { passengerId }= req.params.passengerId
    const {name} = req.body

    await passengerService.update( passengerId, { name })
})
module.exports = router