const Stripe = require('stripe')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const connectDB = require('./db')
const registerRoutes = require('./routes')

const connectionStr = process.env.MONGO_CONNECTION_STRING
const stripe = new Stripe(process.env.STRIPE_SECRET)

app.use(bodyParser.json())

connectDB(connectionStr, (db) => {
  registerRoutes({ app, db, stripe })
})

module.exports = {
  path: '/api',
  handler: app,
}
