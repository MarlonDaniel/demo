
const modelController = require('../controllers/especialidad');
const { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion');

let route = '/especialidad'

module.exports = (app) => {
    app.get(`${route}/get/:id`, [verificaToken], modelController.get);
    app.get(`${route}/list/:nombre?`,[verificaToken], modelController.list);
    app.post(`${route}`,[verificaToken], modelController.create);
    app.put(`${route}/:id`,[verificaToken], modelController.update);
    app.delete(`${route}/:id`, [verificaToken], modelController.delete);
};