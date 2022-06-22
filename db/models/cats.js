'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cats extends Model {

    static associate(models) {
      this.belongsToMany(models.dogs, { through: models.dogscats, foreignKey: 'cat_id' });
    }
  }
  cats.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cats',
  });
  return cats;
};
