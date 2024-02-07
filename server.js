// require('dotenv').config();

const http = require('http');
const express = require('express');
const { mongoConnect } = require('./services/mongo');

const charactersRouter = require('./routes/characters.router');

// Looks to see if there is a port in env file, if not then run the default.
const PORT = 3000;

// Pass Express object into http create server.
const app = express();
//

// Will resolve, then move on to the next 
async function startServer() {
    await mongoConnect();
    // await getAllCharacters();

    app.listen(PORT,() => {
        console.log(`Listening on port ${PORT}...`);
    });
    setRoutes();
}

async function setRoutes() {
    app.use(express.json());
    app.use('/characters', charactersRouter);
}

// Will load on code execution, so the await command will precede the server startup call. 
startServer();