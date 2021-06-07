import config from './config'
import app from './express'
import mongoose from 'mongoose'


//var config = require ("express");
//var app = require("express");
//var mongoose = require("mongoose");


// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {autoIndex: false})
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

if (process.env.NODE_ENV === 'PRODUCTION') {
  app.use(express.static(path.join(__dirname, '../dist/')))

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../dist/index.html'))
  })
}