const playersModel = require('../models/playersModel');

const playersController = {};

playersController.getAllPlayers = async function(req, res) {
    const players = await playersModel.getAllPlayers();
    res.send(players);
};

playersController.getOnePlayer = async function(req, res) {
    const id = req.query.id;
    const player = await playersModel.getOnePlayer(id);
    res.send(player);
};

playersController.createPlayer = async function(req, res) {
    const player = req.body;
    const result = await playersModel.createPlayer(player);
    res.send(result);
}

playersController.updatePlayer = async function(req, res) {
    const id = req.query.id;
    const player = req.body;
    const result = await playersModel.updatePlayer(id, player);
    res.send(result);
};

playersController.deletePlayer = async function(req, res) {
    const id = req.query.id;
    const result = await playersModel.delete(id);
    res.send(result);
}

module.exports = playersController;