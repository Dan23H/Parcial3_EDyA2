const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { nuevoPedido, nuevaCoordenada } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')

router.post('/newPedido', [
    check('id', 'El ID es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    validarCampos
], nuevoPedido)

router.post(
    '/newCoordenada',
    [
        check('X', 'El valor de X es obligatorio').not().isEmpty(),
        check('Y', 'El valor de Y es obligatorio').not().isEmpty(),
        check('pedido_id', "El pedido_id es obligatorio").not().isEmpty(),
        validarCampos
    ],
    nuevaCoordenada)

module.exports = router