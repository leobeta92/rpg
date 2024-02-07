const { getAllCharacters, addNewCharacter } = require('../models/characters.model');

async function httpGetAllCharacters(req,res) {
    try {
        const characters = await getAllCharacters();
        res.status(200).json(characters); 
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
    
    // return res.send('Getting characters...')
    // return res.status(201).json(await getAllCharacters()); 
}

async function httpAddNewCharacter(req,res) {
    console.log(req.body);
    
    const character = req.body;
    console.log(`creating new character...${character}: ${character.name} with ${character.weapon}`)
    await addNewCharacter(character);
    return res.status(201).json(character);

}

module.exports = {
    httpGetAllCharacters,
    httpAddNewCharacter
}