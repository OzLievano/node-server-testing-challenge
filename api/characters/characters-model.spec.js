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

describe('characters model', () =>{
    describe('create()', ()=>{
        test('inserts the provided characters', async () =>{ 
            await Characters.create({'name':'NoobDestroya','class':'death knight',"specialization":"frost","item level":200})
            await Characters.create({'name':'Munchon','class':'priest',"specialization":"shadow","item level":210})
            const characters = await db('characters');
            expect(characters).toHaveLength(2);
        })

        test('returns the character inserted', async()=>{
            let character = await Characters.create({'name':'Moremana','class':'paladin',"specialization":"holy","item level":220})

            expect(character.name).toBe('Moremana')
        })
    })

    describe('remove()',()=>{
        test('removes the provided id', async()=>{
            await Characters.remove(1)
            const characters = await db('characters');
            expect(characters).toHaveLength(0);
        })
        test('no removal with invalid id', async()=>{
            //id = 1;
            await Characters.create({'name':'Munchon','class':'priest',"specialization":"shadow","item level":210})
            await Characters.remove(10);
            const characters = await db('characters');
            expect(characters).toHaveLength(1)
        })
    })
})
