const Sequelize = require('sequelize');
const model = require('../models').usuario;
const bcrypt = require('bcrypt');
const _ = require('underscore');

const Op = Sequelize.Op;

module.exports = {
    create(req, res) {
        return model
            .create({
                nombre: req.body.nombre,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                role: req.body.role,
                usuariocreacion: req.usuario.id,
                fechamodificacion: new Date()
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        let id = req.params.id;
        let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);
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
    list(_, res) {
        return model.findAll({})
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    get(req, res) {
        let id = req.params.id;
        return model.findByPk (id)
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    find(req, res) {
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
    login(req, res) {
        return model.findOne({
            where: {
                email:  req.body.email 
            }
        })
    },
};