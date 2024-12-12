const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Autor = sequelize.define('Autor', {
  nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
});

module.exports = Autor;
