const MongoClient = require('mongodb').MongoClient

function connect(connectionStr, callback) {
  MongoClient.connect(
    connectionStr,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      // eslint-disable-next-line
      if (err) return console.log(err)

      const db = client.db(process.env.MONGO_DATABASE_NAME)

      callback && callback(db)
    }
  )
}

module.exports = connect
