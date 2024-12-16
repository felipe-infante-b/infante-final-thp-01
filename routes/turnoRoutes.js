const express = require('express');
const router = express.Router();
const turnoController = require("../controllers/turnoController.js")

router.get('/', turnoController.getTurnos);
router.get('/:id', turnoController.getTurno);
router.post('/', turnoController.createTurno);
router.get('/reporte-servicios/:mes', turnoController.reporteDiversidadServicios);
//router.put('/:id', updateLibro);
//router.delete('/:id', deleteLibro);

module.exports = router;
