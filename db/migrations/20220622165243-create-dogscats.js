'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dogscats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dog_id: {
        type: Sequelize.STRING,
        references: {
          model: 'dogs',
          key: 'id'
        }
      },
      cat_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cats',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('dogscats');
  }
};
