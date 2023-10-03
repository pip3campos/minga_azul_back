import { expect } from "chai";
import app from '../app.js'
import request from "supertest";

describe('Set de test a Donation',()=>{

    before(function (done) {
        this.timeout(3000)
        setTimeout(done,2500)
    })
    
    describe('Peticiones a /donation',()=>{

        describe('/create-order1',()=>{
            it('Debería retornar el link para redireccionar a Mercado Pago', async () => {
                const response = await request(app)
                    .post('/auth/signin')
                    .send({
                        email: 'igna@mh.com.ar',
                        password: 'hola1234'
                    })
                const token = response.body.response.token
                const respuesta = await request(app)
                    .post('/donate/create-order1')
                    .set('Authorization', `Bearer ${token}`)
                    .send({})
                expect(respuesta.status).to.equal(200)
                expect(respuesta.body).to.have.own.property('init_point')
            })

            it('Debería retornar status 401, unauthorized', async () => {
                /* const response = await request(app)
                    .post('/auth/signin')
                    .send({
                        email: 'igna@mh.com.ar',
                        password: 'hola1234'
                    })
                const token = response.body.response.token */
                const respuesta = await request(app)
                    .post('/donate/create-order1')
                    /* .set('Authorization', `Bearer ${token}`)
                    .send({}) */
                console.log(respuesta.status);
                console.log(respuesta.error);
                expect(respuesta.status).to.equal(401)
                expect(respuesta).to.have.own.property('error')
            })

            it('Debería retornar status 400, wrong password', async () => {
                const response = await request(app)
                    .post('/auth/signin')
                    .send({
                        email: 'igna@mh.com.ar',
                        password: 'holamal1234'
                    })
                expect(response.status).to.equal(400)
                expect(response.body.message).to.be.string
                expect(response.body.message).to.be.equal('wrong password')
                const token = ''
                const respuesta = await request(app)
                    .post('/donate/create-order1')
                    .set('Authorization', `Bearer ${token}`)
                    .send({})
                expect(respuesta.status).to.equal(401)
                expect(respuesta).to.have.own.property('error')
            })
        })
    })
})