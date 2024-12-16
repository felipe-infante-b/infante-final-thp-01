const { Turno } = require('../models/Turno.js');
const sequelize = require('../config/database.js');
const { Op } = require('sequelize');
const { generarReporteDiversidad } = require('../services/TurnoService.js');

exports.getTurnos = async (req, res) => {
  try {
    const turnos = await Turno.findAll();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los turnos' });
    console.log(error)
  }
};

exports.getTurno = async (req, res) => {
  try {
    const turno = await Turno.findByPk(req.params.id);

    if (turno) {
      res.json(turno);
    } else {
      res.status(404).json({ error: 'Turno no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el turno' });
    console.log(error);
  }
};

exports.createTurno = async (req, res) => {
  try {
    const { dia, mes, hora, nombre, telefono, servicio } = req.body;
    const turno = await Turno.create({ dia, mes, hora, nombre, telefono, servicio });
    res.status(201).json(turno);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el turno' });
    console.log(error)
  }
};

exports.updateLibro = async (req, res) => {
  try {
        const libro = await Libro.findByPk(req.params.id);
        if (libro) {
          await libro.update(req.body);
          res.json(libro);
        } else {
          res.status(404).json({ error: 'Libro no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el libro' });
        console.log(error);
      }
};

exports.deleteLibro = async (req, res) => {
  try {
        const libro = await Libro.findByPk(req.params.id);
        if (libro) {
          await libro.destroy();
          res.json({ message: 'Libro eliminado' });
        } else {
          res.status(404).json({ error: 'Libro no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro' });
      }
};

exports.reporteDiversidadServicios = async (req, res) => {
  try {
    const { mes } = req.params;
    const reporte = await generarReporteDiversidad(mes);

    return res.status(200).json({
      mes: mes,
      reporte: reporte,
    });
  } catch (error) {
    console.error('Error al generar el reporte de diversidad de servicios:', error);
    return res.status(400).json({ error: error.message });
  }
};
