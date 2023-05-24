const express = require("express")
const Pedido = require("../models/Pedidos")
const Coordenada = require("../models/Coordenadas")

const registrarPedido = async (req, res = express.request) => {
    const {id, fecha} = req.body
    console.log(id, fecha)
    try {
        
        let pedido = await Pedido.findOne({id: id}) 
        if (pedido) {
            return res.status(400).json({
                ok: false,
                msg: "Ese pedido ya existe."
            })
        }

        pedido = new Pedido(req.body)
        await pedido.save()

        res.status(200).json({
            ok: true,
            pedido
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        })
    }
    
}

const registrarCoordenada = async (req, res = express.request) => {
    const { x, y, pedido_id } = req.body
    try {
        let pedido = await Pedido.findOne({id: pedido_id}) 
        if (!pedido) {
            return res.status(400).json({
                ok: false,
                msg: "Ese pedido no existe."
            })
        }
        
        let coordenada = new Coordenada(req.body)
        await coordenada.save()

        res.json({
            ok: true,
            coordenada
        })
    } catch (error) {
        return res.statusCode(500).json({
            ok: false,
            error
        })
    }
    
}

const verPedido = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

const verCoordenada = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

module.exports = {
    registrarPedido,
    registrarCoordenada,
    verPedido,
    verCoordenada
}