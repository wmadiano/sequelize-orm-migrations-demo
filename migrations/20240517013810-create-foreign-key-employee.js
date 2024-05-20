'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('employee', {
      fields: ['company_id'],
      type: 'foreign key',
      name: 'fk_employee_company',
      references: {
        table: 'company',
        field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('employee', 'fk_employee_company');
  }
};
