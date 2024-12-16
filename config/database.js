const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

module.exports = sequelize;

// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize( {
//   dialect: 'sqlite',
//   storage: './database.sqlite'
// });

// const Turno = require('../models/Turno.js')(sequelize, DataTypes);

// module.exports = {
//   sequelize,
//   Sequelize,
//   Turno,
// };
