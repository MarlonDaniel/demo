var express = require('express');
var router = express.Router();

//const port = 3000
var os = require('os')
//const MongoClient = require('mongodb').MongoClient
//const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TSN Consulting', server: os.hostname(), plataform: os.platform });
  
  //MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
  //  if (err) {
  //res.status(500).send('💥 BOOM 💥: ');
  //  } else {
  //    res.send('Me conecté a la DB! 😎 desde el server '+os.hostname());
  //    db.close();
  //  }
  //});

});

module.exports = router;