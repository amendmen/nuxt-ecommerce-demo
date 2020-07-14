const express = require('express')
const app = express()

const connectDB = require('./db')
const registerRoutes = require('./routes')

const connectionStr = process.env.MONGO_CONNECTION_STRING

connectDB(connectionStr, (db) => {
  registerRoutes(app, db)
})

module.exports = {
  path: '/api',
  handler: app,
}
