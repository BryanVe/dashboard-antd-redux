const { Schema, model } = require('mongoose')

const shipmentSchema = new Schema({
  cliente: String,
  fecha_de_carga: Date,
  herramienta: String,
  cargado_por: String,
  estado: String
})

module.exports = model('Shipment', shipmentSchema)