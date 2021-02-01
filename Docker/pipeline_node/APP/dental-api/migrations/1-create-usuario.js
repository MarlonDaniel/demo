'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('usuario', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        default: 'USER_ROLE',
  
      },
      estado: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      usuariocreacion: DataTypes.INTEGER,
      fechacreacion: DataTypes.DATE,
      usuariomodificacion: DataTypes.INTEGER,
      fechamodificacion: DataTypes.DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuario');
  }
};