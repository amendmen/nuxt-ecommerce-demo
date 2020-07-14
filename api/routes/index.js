module.exports = (app, db) => {
  app.get('/collections', async (req, res) => {
    const collection = db.collection('collections')
    const collections = await collection.find({}, { limit: 10 }).toArray()
    res.json(collections)
  })
}
