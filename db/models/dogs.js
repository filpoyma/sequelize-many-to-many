'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dogs extends Model {

    static associate(models) {
      this.belongsToMany(models.cats, { through: models.dogscats, foreignKey: 'dog_id' });
    }
  }
  dogs.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dogs',
  });
  return dogs;
};
