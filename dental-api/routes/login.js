const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const modelController = require('../controllers/usuario');

module.exports = (app) => {
    app.post('/login',
    function (req, res){
        modelController.login(req, res)
        .then(usuarioDB => {
            if (!usuarioDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: '(Usuario) o contraseña incorrectos'
                    }
                });
            }
            if (!bcrypt.compareSync(req.body.password, usuarioDB.password)) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Usuario o (contraseña) incorrectos'
                    }
                });
            }
            let token = jwt.sign({
                usuario: usuarioDB
            }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
            res.json({
                ok: true,
                token
            });
        })
        .catch((error) => {
            if (error) {
                return res.status(500).json({
                    ok: false,
                    error
                });
            }
        })
    });
}