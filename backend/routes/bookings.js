
const {bookingService} = require('../services')

const router = require('express').Router()


router.get('/', async(req, res)=> {
    const bookings = await bookingService.load()
     res.json(bookings); 
     res.render('bookings', {bookings});
    
})

//http://localhost:3000/bookings?driverId=65ca5821fc586669549c1cc8

//http://localhost:3000/bookings/search?origin=Kabatas
router.get('/search', async(req, res)=> {
    const driverId = req.query.driverId;
    const bookings = await bookingService.query(req.query)
    res.render('bookings', {bookings})
})


module.exports = router