const db = require('../../data/dbConfig');

module.exports = {
    get,
    findById,
    create,
    remove
}

async function get(){
    return await db('characters');
}

async function findById(id){
    return await db('characters').where({ id }).first();
}

async function create(character){
    const [id] = await db('characters').insert(character,"id")
    return await findById(id);
}

async function remove(id){
    return await db('characters').where({id}).del();
}