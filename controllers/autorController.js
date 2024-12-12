const { Autor } = require('../models');

exports.getAutores = async (req, res) => {
  try {
    const autores = await Autor.findAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los autores' });
  }
};

exports.getAutor = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);
    if (autor) {
      res.json(autor);
    } else {
      res.status(404).json({ error: 'Autor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el autor' });
    console.log(error)
  }
};

exports.createAutor = async (req, res) => {
  try {
    const { nombre, apellido, fechaNacimiento } = req.body;
    const autor = await Autor.create({ nombre, apellido, fechaNacimiento });
    res.status(201).json(autor);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el autor' });
    console.log(error)
  }
};

exports.updateAutor = async (req, res) => {
  try {
        const autor = await LiAutorbro.findByPk(req.params.id);
        if (autor) {
          await autor.update(req.body);
          res.json(autor);
        } else {
          res.status(404).json({ error: 'Autor no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el autor' });
        console.log(error);
      }
};

exports.deleteAutor = async (req, res) => {
  try {
        const autor = await Autor.findByPk(req.params.id);
        if (autor) {
          await autor.destroy();
          res.json({ message: 'Autor eliminado' });
        } else {
          res.status(404).json({ error: 'Autor no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el autor' });
      }
}



// // controllers/autorController.js
// const { Autor } = require('../models');

// // Controlador para crear un nuevo autor
// exports.createAutor = async (req, res) => {
//   try {
//     const nuevoAutor = await Autor.create(req.body);
//     res.status(201).json(nuevoAutor);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al crear el autor' });
//   }
// };

// // Controlador para obtener todos los autores
// exports.getAllAutores = async (req, res) => {
//   try {
//     const autores = await Autor.findAll();
//     res.status(200).json(autores);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener los autores' });
//   }
// };

// // Controlador para obtener un autor por ID
// exports.getAutorById = async (req, res) => {
//   try {
//     const autor = await Autor.findByPk(req.params.id);
//     if (autor) {
//       res.status(200).json(autor);
//     } else {
//       res.status(404).json({ error: 'Autor no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener el autor' });
//   }
// };

// // Controlador para actualizar un autor por ID
// exports.updateAutor = async (req, res) => {
//   try {
//     const [updated] = await Autor.update(req.body, {
//       where: { id: req.params.id }
//     });
//     if (updated) {
//       const autorActualizado = await Autor.findByPk(req.params.id);
//       res.status(200).json(autorActualizado);
//     } else {
//       res.status(404).json({ error: 'Autor no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al actualizar el autor' });
//   }
// };

// // Controlador para eliminar un autor por ID
// exports.deleteAutor = async (req, res) => {
//   try {
//     const deleted = await Autor.destroy({
//       where: { id: req.params.id }
//     });
//     if (deleted) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ error: 'Autor no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al eliminar el autor' });
//   }
// };
