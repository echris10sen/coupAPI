/**
 * Imports
 */
const cardRoutes        = require('./cardRoute');
const express           = require('express');
const playerRoutes      = require('./playerRoute');
const swaggerDocument   = require('../../swagger-output.json');
const swaggerUi         = require('swagger-ui-express');

/**
 * Variables
 */
const router = new express.Router();

/**
 * Middleware
 */

router.use('/players', playerRoutes)
// router.use('/cards', cardRoutes);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;