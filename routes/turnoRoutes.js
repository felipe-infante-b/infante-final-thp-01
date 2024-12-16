const express = require('express');
// const { getTurnos, createTurno, getTurno } = require('../controllers/turnoController.js');
// const reporteDiversidadServicios = require("../services/TurnoService.js")

const turnoController = require("../controllers/turnoController.js")

const router = express.Router();

router.get('/', turnoController.getTurnos);
router.get('/:id', turnoController.getTurno);
router.post('/', turnoController.createTurno);
router.get('/reporte-servicios/:mes', turnoController.reporteDiversidadServicios);
//router.put('/:id', updateLibro);
//router.delete('/:id', deleteLibro);

//router.post('/:id/incrementar', incrementarCantidad);
//router.post('/:id/decrementar', decrementarCantidad);

module.exports = router;
