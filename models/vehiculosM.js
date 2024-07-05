var mongoose = require('mongoose');

var vehiculoSchema = new mongoose.Schema ({
    modelo: {type:String},
    placa: {type:String},
    color: {type:String},
    cliente:{type:String},
    estado:{type:Boolean},
});

var Vehiculo = mongoose.model('vehiculo',vehiculoSchema)
module.exports = Vehiculo;