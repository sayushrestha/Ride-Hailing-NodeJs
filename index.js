const express = require('express')

const passengersRouter = require('./routes/passengers')
const driversRouter = require('./routes/drivers')

const indexRouter = require('./routes/index')
require('./mongo-connection')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/passengers', passengersRouter) // url - > /passengers
app.use('/drivers', driversRouter) // url - > /drivers
app.use('/', indexRouter)

app.listen(3000, ()=> {
    console.log('started listening on 3000')
})