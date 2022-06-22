const {Sequelize: {Op}, Cat, Dog} = require('./db/models');

const manyMain = async () => {


  const catsWithFriends = await Cat.findAll({
    include: {
      model: Dog,
      attributes: ['name', 'age'],
    },
    order: [['age', 'DESC']],

  });
  console.log(catsWithFriends.map((cat) => (cat.name + ' have friends ' + cat.Dogs.map((dog) => dog.name))))

  const cats = await Cat.findAll({
    where: {
      age: {
        [Op.gte]: 4,
      },
    },
    raw: true
  });
  console.log({cats});
};

manyMain();


