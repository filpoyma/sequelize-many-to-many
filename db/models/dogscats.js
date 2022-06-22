'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dogscats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dogscats.init({
    dog_id: DataTypes.STRING,
    cat_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dogscats',
  });
  return dogscats;
};