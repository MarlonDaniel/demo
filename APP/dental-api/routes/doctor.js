
const modelController = require('../controllers/doctor');
const { verificaToken } = require('../middlewares/autenticacion');

let route = '/doctor'

module.exports = (app) => {
    app.get(`${route}/get/:id`, [verificaToken], modelController.get);
    app.get(`${route}/list/:nombre?`,[verificaToken], modelController.list);
    app.post(`${route}`,[verificaToken], modelController.create);
    app.put(`${route}/:id`,[verificaToken], modelController.update);
    app.delete(`${route}/:id`, [verificaToken], modelController.delete);
};