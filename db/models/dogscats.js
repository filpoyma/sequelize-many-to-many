'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dogscats extends Model {

    static associate(models) {
    }
  }
  dogscats.init({
    dog_id: DataTypes.INTEGER,
    cat_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dogscats',
  });
  return dogscats;
};
