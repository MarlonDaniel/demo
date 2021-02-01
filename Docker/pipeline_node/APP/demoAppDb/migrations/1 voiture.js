'use strict';
module.exports = {
    up: async(queryInterface, DataTypes) => {
        await queryInterface.createTable('voiture', {
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
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('voiture');
    }
};