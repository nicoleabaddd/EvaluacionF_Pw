const express = require('express');
const router = express.Router();
const vehiculoController = require('../controllers/vehiculos_controllers')

router.post('/vehiculo', vehiculoController.createVehiculo);
router.get('/vehiculo', vehiculoController.getAllVehiculo);
router.put('/vehiculo/:id', vehiculoController.updateVehiculo);
router.delete('/vehiculo/:id', vehiculoController.deleteVehiculo);
router.get('/vehiculo/:id', vehiculoController.getVehiculo);

module.exports=router;