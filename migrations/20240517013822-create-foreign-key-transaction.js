'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('transaction', {
      fields: ['employee_id'],
      type: 'foreign key',
      name: 'fk_transaction_employee',
      references: {
        table: 'employee',
        field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('transaction', 'fk_transaction_employee');
  }
};
