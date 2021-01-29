'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor extends Model {
    static associate(models) {
      doctor.belongsTo(models.especialidad, {
        foreignKey: 'idespecialidad'
      });
    }
  }
  doctor.init({
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
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'doctor',
  });
  return doctor;
};