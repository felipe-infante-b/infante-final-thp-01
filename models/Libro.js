const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Autor = require('./Autor');

const Libro = sequelize.define('Libro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
  }},
});

module.exports = Libro;

Autor.hasMany(Libro, { foreignKey: 'autorId', onDelete: 'CASCADE' });
Libro.belongsTo(Autor, { foreignKey: 'autorId' });

module.exports = Libro;
