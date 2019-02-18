const path = require('path')
const express = require('express')

const server = express()
const config = require('./routes/admin-config.js')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/admin-config', config)

module.exports = server
