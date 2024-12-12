const express = require('express');
const { getLibros, createLibro, updateLibro, deleteLibro, getLibro, incrementarCantidad, decrementarCantidad } = require('../controllers/libroController');

const router = express.Router();

router.get('/', getLibros);
router.get('/:id', getLibro);
router.post('/', createLibro);
router.put('/:id', updateLibro);
router.delete('/:id', deleteLibro);

router.post('/:id/incrementar', incrementarCantidad);
router.post('/:id/decrementar', decrementarCantidad);

module.exports = router;
