const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Turno = sequelize.define('Turno', {
  dia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 30
    }
  },
  mes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 12
    }
  },
  hora: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 23
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  servicio: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['programado', 'auxilio', 'cotización']],
        msg: 'El estado debe ser uno de los siguientes: programado, auxilio, cotización',
      },
    }
  }
});

// Autor.hasMany(Libro, { foreignKey: 'autorId', onDelete: 'CASCADE' });
// Libro.belongsTo(Autor, { foreignKey: 'autorId' });

module.exports = {Turno};
