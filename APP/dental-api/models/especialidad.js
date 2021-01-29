'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class especialidad extends Model {
    static associate(models) {
      especialidad.hasMany(models.doctor, {
        as: 'doctor_especialidad',
        foreignKey: 'idespecialidad'
      });
      
    }
  }
  especialidad.init({
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
    fechamodificacion: DataTypes.DATE,
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'especialidad',
  });
  return especialidad;
};