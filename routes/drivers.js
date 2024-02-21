const { driverService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const drivers = await driverService.load()

  res.render('drivers', { drivers })
})

router.post('/', async (req, res) => {
  const driver = await driverService.insert(req.body)

  res.send(driver)
})

router.delete('/:driverId', async (req, res) => {
  await driverService.removeBy('_id', req.params.driverId)

  res.send('OK')
})

router.get('/young-drivers', async (req, res) => {
  const drivers = await driverService.findYoungDrivers()

  res.render('drivers', { drivers })
})

router.get('/:driverId', async (req, res) => {
  const driver = await driverService.find(req.params.driverId)
  if (!driver) return res.status(404).send('Cannot find driver')
  res.render('driver', { driver })
})



router.patch('/:driverId', async (req, res) => {
    const driverId = req.params.bookId;
    const { name } = req.body;
  
    await driverService.update(driverId, { name });
    res.send('Updated!');
  });


router.get('/find-by-name/:name', async (req, res) => {
    const { name } = req.params;
    const drivers = await driverService.findByDriverName(name);
    res.send(drivers);
  });
  
 
  router.get('/find-by-location/:location', async (req, res) => {
    const { location } = req.params;
    const drivers = await driverService.findByLocation(location);
    res.send(drivers);
  });
  
module.exports = router
