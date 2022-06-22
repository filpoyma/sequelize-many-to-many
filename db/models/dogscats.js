const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DogsCats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DogsCats.init(
    {
      dog_id: DataTypes.INTEGER,
      cat_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'DogsCats',
    }
  );
  return DogsCats;
};
