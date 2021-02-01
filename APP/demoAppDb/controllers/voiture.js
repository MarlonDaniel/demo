const Sequelize = require('sequelize');
const model = require('../models').voiture;

const Op = Sequelize.Op;

module.exports = {
    create(req, res) {
        console.log('entro');
        console.log(req.body.description)
        return model
            .create({
                description: req.body.description,
                buyeddate: req.body.buyeddate,
                instock: req.body.instock
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        let id = req.params.id;
        let body = _.pick(req.body, [
            'description',
            'buyeddate',
            'instock',
        ]);
        body.usuariomodificacion = req.usuario.id;
        body.fechamodificacion = new Date();

        return model.update(
                body, { where: { id: id } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        let id = req.params.id;
        return model.delete({ where: { id: id } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    get(req, res) {
        return model.findByPk(req.params.id)
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    list(_, res) {
        return model.findAll({})
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
};