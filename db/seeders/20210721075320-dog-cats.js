'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert(
      'Dogs',
      [
        {
          name: 'Poo',
          age: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Loo',
          age: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Zoo',
          age: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'Cats',
      [
        {
          name: 'Arr',
          age: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Myyy',
          age: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'leee',
          age: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dogs', null, {});
    await queryInterface.bulkDelete('Cats', null, {});
  },
};
