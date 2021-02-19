const router = require('express').Router();
const Characters = require('../characters/characters-model')

router.get('/', function getAllCharacters(req,res){
    Characters.get()
    .then((characters)=>{
        res.status(200).json(characters);
    })
    .catch((err)=>{
        res.status(500).json({error:err.message})
    })
})

router.get('/:id', function getAllCharacters(req,res){
    const {id} = req.params;
    Characters.findById(id)
    .then((character)=>{
        res.status(200).json(character);
    })
    .catch((err)=>{
        res.status(500).json({error:err.message})
    })
})

router.delete('/:id',function removeCharacter(req,res){
    const {id} = req.params;

    Characters.remove(id)
    .then((character)=>{
        res.status(200).json({message:`Character number ${id} deleted`})
    })
    .catch((err)=>{
        res.status(500).json({error:err.message})
    })
})

router.post('/', function createCharacter(req,res){
    const character = req.body;
    Characters.create(character)
    .then((character)=>{
        res.status(201).json(character);
    })
    .catch((err)=>{
        res.status(500).json({error:err.message})
    })
})
module.exports = router;