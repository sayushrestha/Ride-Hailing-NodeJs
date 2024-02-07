const express = require('express')
const {passengerDatabase} = require('./database')
const flatted = require('flatted')
const app = express()

app.set('view engine', 'pug')

app.get('/passengers', async(req, res)=> {
    const passengers = await passengerDatabase.load()
    // res.send(flatted.stringify(passengers))
    res.render('passengers', {passengers}) // res.render('passengers', {passengers:passengers})
})

app.get('/', (req, res) => {
    res.render('index')
})
app.listen(3000, ()=> {
    console.log('started listening on 3000')
})