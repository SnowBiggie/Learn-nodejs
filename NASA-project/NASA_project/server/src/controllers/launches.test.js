const app = require('../App');
const request = require('supertest');

describe('test GET /launches', () =>{
    test('it should respond with 200 response success',async () =>{
        const response = await request(app).expect('Content-Type', /json/).get('/launches').expect(200);
    });
});

describe('test POST /launch', () =>{

    test('it should respond with 201 success',async ()=>{
        const response = await request(app).post('/launches')
        .send({
            mission: 'USS Enterprise',
            rocket: 'NCC 1701-D',
            target: 'Kepler-186 f',
            launchDate: 'January 4, 2028'
        }).expect('Content-Type', /json/)
        .expect(201);
    });

    test('it should catch missing required properties', ()=>{

    });

    test('it should catch invalid dates', ()=>{

    });
})