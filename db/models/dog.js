const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {

    static associate(models) {
      // define association here
      this.belongsToMany(models.Cat, { through: models.DogsCats, foreignKey: 'dog_id' });
    }
  }
  Dog.init(
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Dog',
    }
  );
  return Dog;
};
