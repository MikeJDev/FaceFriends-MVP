const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;
const db = require('./databaseConnection')
const cors = require('cors')

app.use(cors())
// app.use("/", express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/databaseRetrievalOnLoad', function (req, res) {
  db.faceFriendsDB.find({})
    .then((results) => {
      console.log('success query database', results)
      res.send(results)
    })
})

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
})
