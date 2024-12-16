const { Turno } = require('../models/Turno.js');
const sequelize = require('../config/database.js');
const { Op } = require('sequelize');

const generarReporteDiversidad = async (mes) => {
  if (!mes || isNaN(mes) || mes < 1 || mes > 12) {
    throw new Error('El parámetro mes debe ser un número entre 1 y 12.');
  }

  const fechaInicio = new Date(new Date().getFullYear(), mes - 1, 1);

  const resultado = await Turno.findAll({
    attributes: [
      'servicio',
      [sequelize.fn('COUNT', sequelize.col('servicio')), 'cantidad'],
    ],
    where: {
      createdAt: {
        [Op.gte]: fechaInicio,
      },
    },
    group: ['servicio'],
  });

  return resultado.map((item) => ({
    tipoServicio: item.estado,
    cantidad: item.dataValues.cantidad,
  }));
};

module.exports = { generarReporteDiversidad };
