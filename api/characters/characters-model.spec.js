const Characters = require('./characters-model');

const db = require('../../data/dbConfig');

// need 2 tests for create and delete

beforeAll(async () =>{
    await db.migrate.rollback();
    await db.migrate.latest();
})

beforeEach(async () => {
    await db('characters').truncate();
})

afterAll(async ()=>{
    await db.destroy();
})

