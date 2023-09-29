import { expect } from 'chai'
import app from '../app.js'
import request from 'supertest'

describe('tests to Authentication', () => {

    before(function (done) {
        this.timeout(3000)
        setTimeout(done,2500)
    })

    describe('Post SignUp', () => {
        it('Deberia de retornarme un mensaje con un success:false', async()=>{

            const res= await request(app)
            .post('/auth/signup')
            .send({
                email: 'testing44@gmail.com',
                password: 'hola1234',
            })

            expect(res.body.success).to.equal(false)
            expect(res.body.message).to.equal('Se necesita el envio de una imagen para el registro')
       
        })
        it('Deberia de retornarme un success:true con un response y con status 200', async()=>{

            const res= await request(app)
            .post('/auth/signup')
            .field({
                email: 'testing10@gmail.com',
                password: 'hola1234',    
            })
            .attach('file', '/Users/marti/Desktop/MERN/Sprint 2/Minga-fron-Galan/public/images/dekuLlorando.jpeg')

            expect(res.status).to.equal(200)
            expect(res.body.success).to.equal(true)
            expect(res.body).to.have.property('response')
            expect(res.body.message).to.equal('User created')
       
        })

    })



})