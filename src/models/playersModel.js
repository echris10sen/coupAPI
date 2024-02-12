const client = require('../config/mongodbConnect');
const { ObjectId } = require('mongodb');

const playersModel = {};

playersModel.getAllPlayers = async function() {
    try {
        const database = await client.db("coup");
        const collection = await database.collection("players");

        const cursor = await collection.find({});
        const players = await cursor.toArray();
        return players;

    } catch (error) {
        console.error(error);
    }
};

playersModel.getOnePlayer = async function(id) {
    try {
        const database = await client.db("coup");
        const collection = await database.collection("players");

        const player = await collection.findOne({ _id: new ObjectId(id) });
        return player;

    } catch (error) {
        console.error(error);
    }
};

playersModel.createPlayer = async function(player) {
    try {
        const database = await client.db("coup");
        const collection = await database.collection("players");

        const result = await collection.insertOne(player);
        return result;

    } catch (error) {
        console.error(error);
    }
};

playersModel.updatePlayer = async function(id, player) {
    try {
        const database = await client.db("coup");
        const collection = await database.collection("players");

        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: player });
        return result;

    } catch (error) {
        console.error(error);
    }
};

playersModel.deletePlayer = async function(id) {
    try {
        const database = await client.db("coup");
        const collection = await database.collection("players");

        const result = await collection.deleteOne({ _id: ObjectId(id) });
        return result;

    } catch (error) {
        console.error(error);
    }
};

module.exports = playersModel;