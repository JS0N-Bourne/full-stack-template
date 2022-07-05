const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8000

let dbConnectionString = process.env.DB_STRING,
  dbName = 'practicedatabase',
  collection

MongoClient.connect(dbConnectionString)
  .then(client => {
    console.log(`Connected to Database`)
    db = client.db(dbName)
    collection = db.collection('collectiondatabase')
  })

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port`)
})