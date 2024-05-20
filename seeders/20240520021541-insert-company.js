module.exports = {
  up: async (queryInterface, Sequelize) => {
    const companies = [
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
    ];

    const transaction = await queryInterface.sequelize.transaction();
    try {
      for (const company of companies) {
        try {
          await queryInterface.bulkInsert('company', [company], { transaction });
        } catch (error) {
          if (error.name === 'SequelizeUniqueConstraintError') {
            console.log(`Duplicate entry for ${company.id} ignored`);
          } else {
            throw error;
          }
        }
      }
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      // throw error;
    }
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('company', null, {});
  },
};
