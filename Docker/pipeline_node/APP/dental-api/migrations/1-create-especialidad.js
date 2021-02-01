'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('especialidad', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: DataTypes.STRING,
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
    await queryInterface.dropTable('especialidad');
  }
};