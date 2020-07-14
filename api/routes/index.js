module.exports = (app, db) => {
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
}
