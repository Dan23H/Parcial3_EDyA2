const { Schema, model } = require("mongoose")

const CoordenadaSchema = Schema({
    X: {
        type: Number,
        require: true
    },
    Y: {
        type: Number,
        require: true
    },
    pedido_id: {
        type: Number,
        require: true
    }
})

module.exports = model("Coordenadas", CoordenadaSchema)