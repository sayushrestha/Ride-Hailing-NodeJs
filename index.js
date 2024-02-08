const express = require('express')
const {passengerDatabase} = require('./database')
const flatted = require('flatted')
const Passenger = require('./models/passenger')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.set('view engine', 'pug')

app.get('/passengers', async(req, res)=> {
    const passengers = await passengerDatabase.load()
    // res.send(flatted.stringify(passengers))
    res.render('passengers', {passengers}) // res.render('passengers', {passengers:passengers})
})

app.post('/passengers', async(req, res)=> {
    console.log("req.body", req.body)
    res.send('ok')
    // await passengerDatabase.insert(Passenger.create(req.params.name, req.params.locaation));
})

//http://localhost:3000/passenger/d009af8b-b539-466e-ac71-f17037af92a6
app.get('/passenger/:id', async(req, res)=> {
    const passenger = await passengerDatabase.find(`${req.params.id}`)
    if (!passenger) return res.status(404).send('Can not find passenger')
    res.render('passenger', {passenger})
})

app.get('/', (req, res) => {
    res.render('index')
})
app.listen(3000, ()=> {
    console.log('started listening on 3000')
})