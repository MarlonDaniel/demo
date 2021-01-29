'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve([
      queryInterface.addConstraint('doctor', {
        fields: ['idespecialidad'],
        type: 'foreign key',
        name: 'FK_doctor_especialidad',
        references: {
          table: 'especialidad',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve([
      queryInterface.removeConstraint(
        'doctor',
        'FK_doctor_especialidad'
      ),
    ]);
  },
};
