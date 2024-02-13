const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');
const utils = require('../utils');

router.get('/', utils.handleErrors((req, res, next) => {
        /* #swagger.parameters['id'] = {
            in: 'query',
            description: 'By default no ID will result in all players. If ID is provided, only that player will be returned',
            required: false,
            type: 'string'
        } */

    if (req.query.id) {
        return playersController.getOnePlayer(req, res, next);
    } else {
        return playersController.getAllPlayers(req, res, next);
    }
}));
router.post('/', utils.handleErrors((req, res, next) => {
    /* #swagger.requestBody = {
        description: 'Player object to be created',
        required: true,
        content: {
            'application/json': {
                schema: { $ref: "#/components/schemas/Player" }
            }
        }
    } */
    playersController.createPlayer(req, res, next);
}));

router.put('/', utils.handleErrors((req, res, next) => {
    /* #swagger.parameters['id'] = {
        in: 'query',
        description: 'ID of the player to be updated',
        required: true,
        type: 'string'
    } */
    /* #swagger.requestBody = {
        description: 'Player object to be updated',
        required: true,
        content: {
            'application/json': {
                schema: { $ref: "#/components/schemas/Player" }
            }
        }
    } */
    playersController.updatePlayer(req, res, next);
}));

router.delete('/', utils.handleErrors((req, res, next) => {
    /* #swagger.parameters['id'] = {
        in: 'query',
        description: 'ID of the player to be deleted',
        required: true,
        type: 'string'
    } */
    playersController.deletePlayer(req, res, next);
}));

module.exports = router;