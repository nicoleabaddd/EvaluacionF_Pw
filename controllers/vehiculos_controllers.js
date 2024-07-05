const Vehiculo = require('../models/vehiculosM');

exports.createVehiculo = async (req, res) => {
  try {
    const newVehiculo = new Vehiculo(req.body);
    const vehiculo = await newVehiculo.save();
    res.status(201).json(vehiculo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllVehiculo = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    res.status(200).json(vehiculos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVehiculo = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findById(req.params.id);
    if (!vehiculo) return res.status(404).json({ error: 'Vehículo not found' });
    res.status(200).json(vehiculo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateVehiculo = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vehiculo) return res.status(404).json({ error: 'Vehículo not found' });
    res.status(200).json(vehiculo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteVehiculo = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findByIdAndDelete(req.params.id);
    if (!vehiculo) return res.status(404).json({ error: 'Vehículo not found' });
    res.status(200).json({ message: 'Vehículo deleted successfully'});
  } catch (err) {
    res.status(500).json({ error: err.message});
}
};