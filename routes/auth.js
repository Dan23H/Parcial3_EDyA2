const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { registrarPedido, registrarCoordenada, verPedido, verCoordenada } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')

router.post("/newPedido", registrarPedido)

router.post('/newCoord', [
    check('id', 'El ID debe ser numérico.').not().isEmpty(),
    check('x', 'El valor de X debe ser numérico.').not().isEmpty(),
    check('y', 'El valor de Y debe ser numérico.').not().isEmpty(),
    validarCampos
], 
registrarCoordenada)

router.get("/pdd", verPedido)
router.get("/crdnd", verCoordenada)

module.exports = router