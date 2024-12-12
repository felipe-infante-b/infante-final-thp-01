const express = require('express');
const { getTurnos, createTurno, getTurno } = require('../controllers/turnoController.js');

const router = express.Router();

router.get('/', getTurnos);
router.get('/:id', getTurno);
router.post('/', createTurno);
//router.put('/:id', updateLibro);
//router.delete('/:id', deleteLibro);

//router.post('/:id/incrementar', incrementarCantidad);
//router.post('/:id/decrementar', decrementarCantidad);

module.exports = router;
