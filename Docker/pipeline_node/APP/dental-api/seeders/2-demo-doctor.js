'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('doctor', [
      {
        nombre: "Doctor 1",
        dni:"12345679",
        fechanacimiento: new Date(),
        colegiatura: "Colegiatura 1",
        registroesp: "regEsp1",
        sexo: "M",
        idespecialidad: 1,
        celular: 123456789,
        email: "correo@correo.com",
        idseguro: 1,
        sueldo: 0,
        usuariocreacion: 1,
        fechacreacion: new Date(),
      },
      {
        nombre: "Doctor 2",
        dni:"987654321",
        fechanacimiento: new Date(),
        colegiatura: "Colegiatura 2",
        registroesp: "regEsp2",
        sexo: "M",
        idespecialidad: 1,
        celular: 123456789,
        email: "correo@correo.com",
        idseguro: 1,
        sueldo: 0,
        usuariocreacion: 1,
        fechacreacion: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('doctor', null, {});
  }
};
