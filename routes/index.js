const express = require('express');
const router = express.Router();
const port = 3000
const os = require('os')

const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

router.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('💥 BOOM 💥: ' + err);
    } else {
      res.send('Me conecté a la DB! 😎 desde el server '+os.hostname());
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))

module.exports = app;