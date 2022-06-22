const {Sequelize: {Op}, cats, dogs} = require('./db/models');

const manyMain = async () => {


  const catsWithFriends = await cats.findAll({
    include: {
      model: dogs,
      attributes: ['name', 'age'],
    },
    order: [['age', 'DESC']],

  });
  console.log(catsWithFriends.map((cat) => (cat.name + ' have friends ' + cat.dogs.map((dog) => dog.name))))

  const allCatsGreater4 = await cats.findAll({
    where: {
      age: {
        [Op.gte]: 4,
      },
    },
    raw: true
  });
  console.log({allCatsGreater4});
};

manyMain();


