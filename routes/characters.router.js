const express = require('express');
const { httpGetAllCharacters, httpAddNewCharacter } = require('../controllers/characters.controller');

const charactersRouter = express.Router();

charactersRouter.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5500");
    // Middleware logic specific to /characters route
    // console.log('Middleware specific to /characters route');
    // Access request and response objects here
    console.log('Request method:', req.method);
    console.log('Request URL:', req.originalUrl);
    next(); // Pass control to the next middleware or route handler
  });

// Get All Characters
charactersRouter.get('/',httpGetAllCharacters);

// Get One Character
// charactersRouter.get('/:id',httpGetAllCharacters);

// Create A Character
charactersRouter.post('/', httpAddNewCharacter);

// Update A Character
// charactersRouter.patch('/', httpAddNewLaunch);

// Delete
// charactersRouter.delete('/:id', httpAbortLaunch);

module.exports = charactersRouter;