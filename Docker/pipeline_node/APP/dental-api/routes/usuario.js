const modelController = require('../controllers/usuario');
const { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion');

let route = '/usuario'

module.exports = (app) => {
    app.get(`${route}/:id`, [verificaToken,verificaAdmin_Role], modelController.get);
    app.get(`${route}/list`,[verificaToken], modelController.list);
    app.post(`${route}`,[verificaToken,verificaAdmin_Role], modelController.create);
    app.put(`${route}/:id`,[verificaToken,verificaAdmin_Role], modelController.update);
    app.delete(`${route}/:id`, [verificaToken,verificaAdmin_Role], modelController.delete);
};