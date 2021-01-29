'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('doctor', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: DataTypes.STRING,
      dni: DataTypes.STRING,
      fechanacimiento: DataTypes.DATE,
      colegiatura: DataTypes.STRING,
      registroesp: DataTypes.STRING,
      sexo: {
        type: DataTypes.CHAR,
        defaultValue: "M",
      },
      idespecialidad: DataTypes.INTEGER,
      celular: DataTypes.STRING,
      email: DataTypes.STRING,
      idseguro: DataTypes.INTEGER,
      sueldo: DataTypes.FLOAT,
      estado: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      usuariocreacion: DataTypes.INTEGER,
      fechacreacion: DataTypes.DATE,
      usuariomodificacion: DataTypes.INTEGER,
      fechamodificacion: DataTypes.DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doctor');
  }
};