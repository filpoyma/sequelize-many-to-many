'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert(
      'dogscats',
      [
        {
          dog_id: 2,
          cat_id: 1,
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          dog_id: 1,
          cat_id: 1,
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          dog_id: 2,
          cat_id: 2,
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          dog_id: 2,
          cat_id: 3,
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          dog_id: 3,
          cat_id: 1,
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          dog_id: 3,
          cat_id: 2,
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('dogscats', null, {});
  },
};
