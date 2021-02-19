const express = require('express');

const server = express();

const charRouter = require('../api/characters/characters-router.js')

server.use(express.json());

server.use('/api/characters', charRouter);


server.get('/', function testIfServerUp(req,res){
    res.status(200).json({api:'server is up and running.'})
})

module.exports = server;