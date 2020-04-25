const express = require('express')
const router = express.Router()
const Shipment = require('../../models/Shipment')
const verifyToken = require('../../functions/verifyToken')
const getDate = require('../../functions/getDate')

router.post('/save', async (req, res) => {
  const { cliente, herramienta, cargado_por, estado } = req.body
  const shipment = new Shipment({
    cliente,
    fecha_de_carga: new Date(),
    herramienta,
    cargado_por,
    estado
  })
  
  await shipment.save()
  res.send('Shipment was saved succesfully')
})

router.get('/getAll', async (req, res) => {
  const data = await Shipment.find()
  const parsedData = data.map((item) => {
    return {
      ...item._doc,
      fecha_de_carga: getDate(item._doc.fecha_de_carga)
    }
  })
  res.json(parsedData)
})

module.exports = router