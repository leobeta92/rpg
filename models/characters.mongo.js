// Code here is to specifically talk to Mongo.

const mongoose = require('mongoose');

const charactersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    weapon: {
        type: String,
        required: true,
    }
});

const Character = mongoose.model('Character', charactersSchema);

// Specifying collection name. Collects launchesSchema with the latest "launches" collection.
module.exports = Character;