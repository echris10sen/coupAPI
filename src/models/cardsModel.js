const client = require('../config/mongodbConnect');
const { ObjectId } = require('mongodb');

const cardsModel = {};

cardsModel.getAll = async function() {
    try {
        const database = await client.db("coup");
        const collection = await collection("cards");

        const cursor = await collection.find({});
        const cards = await cursor.toArray();
        return cards;

    } catch (error) {
        console.error(error);
    }
};

cardsModel.getOne = async function(id) {
    try {
        const database = await client.db("coup");
        const collection = await collection("cards");

        const card = await collection.findOne({ _id: ObjectId(id) });
        return card;

    } catch (error) {
        console.error(error);
    }
};

cardsModel.create = async function(card) {
    try {
        const database = await client.db("coup");
        const collection = await collection("cards");

        const result = await collection.insertOne(card);
        return result;

    } catch (error) {
        console.error(error);
    }
};

module.exports = cardsModel;