
const {driverService} = require('../services')

const router = require('express').Router()

router.get('/', async(req, res)=> {
    const drivers = await driverService.load()
    res.render('drivers', {drivers}) // res.render
})

// axios.post('/drivers', { name: "Hilal", location: "Frankfurt"}).then(res=> res.data).then(console.log).catch(console.log)
router.post('/', async(req, res)=> {
    const driver = await driverService.insert(req.body);
    res.send(driver)
})


router.delete('/:driverId', async(req, res) => {
    await driverService.removeBy('_id', req.params.driverId)
    res.send('OK')
})

//http://localhost:3000/driver/d009af8b-b539-466e-ac71-f17037af92a6
router.get('/:driverId', async(req, res)=> {
    const driver = await driverService.find(req.params.driverId)
    if (!driver) return res.status(404).send('Can not find driver')
    res.render('driver', {driver})
})


router.patch('/:driverId', async (req, res) => {
    const { driverId } = req.params.driverId
    const { name } = req.body
  
    await driverService.update(driverId, { name })
  })
  
module.exports = router