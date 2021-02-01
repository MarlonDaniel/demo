const Sequelize = require('sequelize');
const model = require('../models').doctor;
const model_especialidad = require('../models').especialidad;
const Op = Sequelize.Op;

module.exports = {
    create(req, res) {
        return model
            .create({
                nombre: req.body.nombre,
                dni: req.body.dni,
                fechanacimiento: req.body.fechanacimiento,
                colegiatura: req.body.colegiatura,
                registroesp: req.body.registroesp,
                sexo: req.body.sexo,
                idespecialidad: req.body.idespecialidad,
                celular: req.body.celular,
                email: req.body.email,
                idseguro: req.body.idseguro,
                sueldo: req.body.sueldo,
                usuariocreacion: req.usuario.id,
                fechacreacion: new Date(),
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        let id = req.params.id;
        let body = _.pick(req.body, [
            'nombre',
            'fechanacimiento',
            'colegiatura',
            'registroesp',
            'sexo',
            'idespecialidad',
            'celular',
            'email',
            'idseguro',
            'sueldo',
            'estado',
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
    list(req, res) {
        let nombre = req.params.nombre == undefined ? '' : req.params.nombre;
        return model.findAll({
                include: [{
                    model: model_especialidad,
                    as: 'especialidad',
                    attributes: [
                        'id',
                        'nombre'
                    ],
                }, ],
                where: {
                    nombre: {
                        [Op.like]: `%${nombre}%`
                    }
                }
            })
            .then(result => res.status(200).send(result))
            .catch(error => {
                console.log("error", error);
                res.status(400).send(error)
            })
    }
};