'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('especialidad', [
      {
        nombre: 'Especialidad 1',
        usuariocreacion: 1,
        fechacreacion: new Date()
      },
      {
        nombre: 'Especialidad 2',
        usuariocreacion: 1,
        fechacreacion: new Date()
      },
      {
        nombre: 'Especialidad 3',
        usuariocreacion: 1,
        fechacreacion: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('especialidad', null, {});
  }
};
