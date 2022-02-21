const { createBand, getBands, getBandsById, deleteBand, updateBands } = require('./band.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/validation_token');

//Configuramos las rutas para la API
router.post('/', checkToken, createBand);
router.get('/', checkToken, getBands);
router.get('/:id', checkToken, getBandsById);
router.put("/", checkToken, updateBands);
router.delete("/:id", checkToken, deleteBand);

module.exports = router;