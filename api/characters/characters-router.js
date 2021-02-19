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

module.exports = router;