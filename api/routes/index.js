module.exports = ({ app, db, stripe }) => {
  app.get('/sections', async (req, res) => {
    const collection = db.collection('sections')
    const sections = await collection.find({}).toArray()
    res.json(sections)
  })

  app.get('/collections', async (req, res) => {
    const collection = db.collection('collections')
    const collections = await collection.find({}).toArray()
    res.json(collections)
  })

  app.post('/payment', async (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd',
    }

    try {
      const charge = await stripe.charges.create(body)
      res.status(200).send({ charge })
    } catch (error) {
      res.status(500).send({ error })
    }
  })
}
