const Sequelize = require('sequelize');
const model = require('../models').especialidad;

module.exports = {
    create(req, res) {
        return model
            .create({
                nombre: req.body.nombre,
                usuariocreacion: req.usuario.id,
                fechacreacion: new Date()
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        let id = req.params.id;
        let body = _.pick(req.body, ['nombre','estado']);
        body.usuariomodificacion = req.usuario.id;
        body.fechamodificacion = new Date();

        return model.update(
            body,
            { where: { id: id } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        let id = req.params.id;
        return model.delete(
            { where: { id: id } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    get(req, res) {
        return model.findByPk (req.params.id)
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    list(req, res) {
        return model.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${req.params.nombre}%`
                }
            }
        })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
};