const { Schema, model } = require('mongoose')

const PedidoSchema = Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    fecha: {
        type: String,
        require: true
    }
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

PedidoSchema.virtual('coordenadas',{
    ref: 'Coordenada',
    localField: 'pedido_id',
    foreignField: 'id',
    justOne: false,
})

module.exports = model('Pedido', PedidoSchema)