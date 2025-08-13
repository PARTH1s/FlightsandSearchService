const express = require('express');
const router = express.Router();

// Versioned API routes
const v1ApiRoutes = require('./v1/index');

// All routes under /api/v1
router.use('/v1', v1ApiRoutes);

module.exports = router;
