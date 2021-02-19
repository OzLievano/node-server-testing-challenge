const db = require('../../data/dbConfig');

module.exports = {
    get,
    create,
    remove
}

async function get(){
    return await db('characters');
}

async function create(character){
    return character;
}

async function remove(id){
    return id;
}