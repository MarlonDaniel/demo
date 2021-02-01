var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    /* 
        // me conecto a la base de datos
        const { Sequelize } = require('sequelize');

        // Option 1: Passing a connection URI
        const sequelize = new Sequelize('mysql://tnproot:tnproot@localhost:3306/tnpdemo') // Example for postgres

        var User = sequelize.define('voiture', {
            description: Sequelize.STRING,  
            birthday: Sequelize.DATE


        });

        sequelize.sync().then(function() {
            return User.create({
                username: 'janedoe',
                birthday: new Date(1980, 6, 20)
            });
        }).then(function(jane) {
            console.log(jane.get({
                plain: true
            }));
        });
     */
    res.render('index', { title: 'Express' });
});

module.exports = router;