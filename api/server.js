const express = require('express');

const server = express();

server.use(express.json());


server.get('/', function testIfServerUp(req,res){
    res.status(200).json({api:'server is up and running.'})
})

module.exports = server;