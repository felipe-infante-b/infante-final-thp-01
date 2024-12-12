const { Turno } = require('../models');

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
