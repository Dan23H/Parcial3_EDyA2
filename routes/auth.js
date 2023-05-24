const express = require("express")
const routes = express.Router()
const {registrarPedido, registrarCoordenada, verPedido, verCoordenada} = require("../controllers/auth")
const { check } = require("express-validator")
const { validarCampos } = require("../middlewares/validar-campos")

routes.post("/", [
    check("id", "El ID debe ser numérico.").not().isNumeric(),
    check("fecha", "La fecha debe tener un formato adecuado. (AAAA-MM-DD)").not().isDate(),
    validarCampos
], registrarPedido)

routes.post("/cord", [
    check("id", "El ID debe ser numérico.").not().isNumeric(),
    check("x", "El valor de X debe ser numérico.").not().isNumeric(),
    check("y", "El valor de Y debe ser numérico.").not().isNumeric(),
    validarCampos
], registrarCoordenada)

routes.get("/", verPedido)
routes.get("/cord", verCoordenada)

module.exports = routes