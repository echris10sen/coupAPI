const { Api404Error, Api500Error } = require('../utils/apiErrors');
const regValidate = require('../utils/playerValidation');
const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');
const utils = require('../utils');
const { body } = require('express-validator');

router.get('/', utils.handleErrors(async (req, res, next) => {
        /* #swagger.parameters['id'] = {
            in: 'query',
            description: 'By default no ID will result in all players. If ID is provided, only that player will be returned',
            required: false,
            type: 'string'
        } */
        /* #swagger.responses[200] = { 
            description: 'Player(s) found',
            schema: { $ref: "#/components/schemas/Player" }
        } */
        /* #swagger.responses[404] = { description: 'Player not found'} */
        /* #swagger.responses[500] = { description: 'Server Error'} */
    try{
        if (req.query.id) {
            const player = await playersController.getOnePlayer(req, res, next);
            if (!player) {
                throw new Api404Error('Player not found', 404, 'Player not found');
            }
            return player;
        } else {
            return playersController.getAllPlayers(req, res, next);
        }
    } catch (error) {
        next(new Api500Error('Server Error', 500, error.message));
    }        
}));
router.post('/', 
regValidate.addPlayerRules(),
regValidate.validatePlayer,
utils.handleErrors(async(req, res, next) => {
    /* #swagger.requestBody = {
        description: 'Player object to be created',
        required: true,
        content: {
            'application/json': {
                schema: { $ref: "#/components/schemas/Player" }
            }
        }
    } */
    /* #swagger.responses[500] = { description: 'Server Error'} */
    try {
        await playersController.createPlayer(req, res, next);
    } catch (error) {
        next(new Api500Error('Server Error', 500, error.message));
    }
}));

router.put('/', 
regValidate.addPlayerRules(),
regValidate.validatePlayer,
utils.handleErrors(async (req, res, next) => {
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
    /* #swagger.responses[500] = { description: 'Server Error'} */
    try {
        await playersController.updatePlayer(req, res, next);
    } catch (error) {
        next(new Api500Error('Server Error', 500, error.message));
    }
}));

router.delete('/', utils.handleErrors(async (req, res, next) => {
    /* #swagger.parameters['id'] = {
        in: 'query',
        description: 'ID of the player to be deleted',
        required: true,
        type: 'string'
    } */
    /* #swagger.responses[500] = { description: 'Server Error'} */
    try {
        playersController.deletePlayer(req, res, next);
    } catch (error) {
        next(new Api500Error('Server Error', 500, error.message));
    }
}));

module.exports = router;