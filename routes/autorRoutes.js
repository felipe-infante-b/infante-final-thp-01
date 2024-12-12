const express = require('express');
const { getAutores, createAutor, updateAutor, deleteAutor, getAutor } = require('../controllers/autorController');

const router = express.Router();

router.get('/', getAutores);
router.get('/:id', getAutor);
router.post('/', createAutor);
router.put('/:id', updateAutor);
router.delete('/:id', deleteAutor);

module.exports = router;
