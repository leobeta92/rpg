const Character = require('./characters.mongo');
const mongoose = require('mongoose');

async function getAllCharacters() {
    // Updated the Character extraction above. See what I need to do to get the database from this import statement.
    const characters = await Character
    .find({}, { '_id': 0, '_v': 0});

    return characters;
}

async function addNewCharacter(character) {
    
    console.log(`in model, adding ${character.name} with weapon ${character.weapon}`)
    // return await characters.findOne({
    //     name: character.name,
    //     weapon: character.weapon
    // });

    const newCharacter = new Character({
        name: character.name,
        weapon: character.weapon
    })

    return await newCharacter.save();
}

module.exports = {
    getAllCharacters,
    addNewCharacter
}