require('dotenv').config()
const express = require('express')
const server = express()
const PORT = 5009

const router = require('./src/routes')
server.use(express.json())


//endpoint
server.use('/api/v1/', router)

server.use('/', (req, res) => {
    res.send("hello World bang?")
})

server.listen(PORT, function () {
    console.log(`Running in port ${PORT} Happy Coding`, PORT)
})
