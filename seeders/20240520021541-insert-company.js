module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('company', [
      {
        id: 'GLOBE',
        name: 'GLOBE TELECOM, INC.',
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'INNOVE',
        name: 'INNOVE COMMUNICATIONS, INC.',
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'BAYAN',
        name: 'BAYAN TELECOMMUNICATIONS, INC.',
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('company', null, {});
  },
};
