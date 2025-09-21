const express = require('express');
const router = express.Router();
const { getMonasteries } = require('../controllers/monasteryController');

// This route now uses the getMonasteries controller function
router.get('/', getMonasteries);

module.exports = router;