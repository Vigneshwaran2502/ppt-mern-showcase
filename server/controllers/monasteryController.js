const Monastery = require('../models/monasteryModel');

// @desc    Get all monasteries
// @route   GET /api/monasteries
const getMonasteries = async (req, res) => {
  try {
    const monasteries = await Monastery.find({});
    res.status(200).json(monasteries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getMonasteries,
};