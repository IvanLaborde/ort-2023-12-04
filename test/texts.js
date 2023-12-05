const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('Texto', function () {
    describe ('Obtener un texto', function (){
        it('Obtener un texto en base a su id', function(done){
            request(app)
            .get('/texts/1')
            .expect(200)
            .end(function(err, res){
                assert.isNotNull(res.body);
                if(err) return done(err)
                return done()
            })
        })
    })
})