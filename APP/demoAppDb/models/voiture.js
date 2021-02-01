'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class voiture extends Model {
        static associate(models) {}
    }
    voiture.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        description: DataTypes.STRING,
        buyeddate: DataTypes.DATE,
        instock: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
        },
        creationuser: DataTypes.INTEGER,
        creationdate: DataTypes.DATE,
        modificationuser: DataTypes.INTEGER,
        modificationdate: DataTypes.DATE
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'voiture',
    });
    return voiture;
};