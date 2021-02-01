'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario', [
      {
        nombre: 'John Castillo',
        email: 'joedca86@gmail.com',
        password: bcrypt.hashSync('quecosasno2', 10),
        img: '',
        role: 'ADMIN_ROLE',
        usuariocreacion: 1,
        fechacreacion: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
