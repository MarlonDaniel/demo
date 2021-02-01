/* const modelController = require('../controllers/voiture');

let route = '/voiture'

module.exports = (app) => {
    app.get(`${route}/get/:id`, modelController.get);
    app.get(`${route}/list/:nombre?`, modelController.list);
    app.post(`${route}`, modelController.create);
    app.put(`${route}/:id`, modelController.update);
    app.delete(`${route}/:id`, modelController.delete);
};
 */

var express = require('express');
var router = express.Router();
const modelController = require('../controllers/voiture');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', modelController.create);

module.exports = router;