
const {bookingService} = require('../services')

const router = require('express').Router()

router.get('/', async(req, res)=> {
    const bookings = await bookingService.load()
    res.render('bookings', {bookings}) // res.render
})


//http://localhost:3000/bookings?driverId=65ca5821fc586669549c1cc8
router.get('/search', async(req, res)=> {
    const driverId = req.query.driverId;
    const bookings = await bookingService.findByDriverId(driverId)
    res.render('bookings', {bookings})
})


module.exports = router