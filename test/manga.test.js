import { expect } from 'chai'
import app from '../app.js'
import request from 'supertest'

describe('tests to Authentication', () => {

    before(function (done) {
        this.timeout(3000)
        setTimeout(done, 2500)
    })

    describe('Post Manga', () => {
        it('Deberia de retornarme un mensaje con un success:false', async () => {

            const res = await request(app)
                .post('/mangas')
                .set('Authorization', 'bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlnbmFAbWguY29tLmFyIiwiaWF0IjoxNjk1OTM0NzYzLCJleHAiOjE2OTYwMjExNjN9.m6ACeyy7Ci-QGWfEplCcaoMgtMRPToBo5vw-DtSnLHI')
                .field({
                    title: 'testingManga3',
                    category_id: 'shojo',
                    description: '3dsadsadsadsadsadasdsadasdsadsadsadsadasdsadasdasdasdasdasdsadasdsadassadas' 
            })
            expect(res.body.success).to.equal(false)
            expect(res.body.message).to.equal('Se necesita el envio de una imagen para la creacion del manga')

        })

        it('Deberia de retornarme un success:true con un message, un response y status 201', async () => {

            const res = await request(app)
                .post('/mangas')
                .set('Authorization', 'bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlnbmFAbWguY29tLmFyIiwiaWF0IjoxNjk1OTM0NzYzLCJleHAiOjE2OTYwMjExNjN9.m6ACeyy7Ci-QGWfEplCcaoMgtMRPToBo5vw-DtSnLHI')
                .field({
                    title: 'testingManga4',
                    category_id: 'shojo',
                    description: '4dsadsadsadsadsadasdsadasdsadsadsadsadasdsadasdasdasdasdasdsadasdsadassadas' 
            })
                .attach('cover_photo', '/Users/marti/Desktop/MERN/Sprint 2/Minga-fron-Galan/public/images/dekuLlorando.jpeg')

            expect(res.status).to.equal(201)
            expect(res.body.success).to.equal(true)
            expect(res.body).to.have.property('response')
            expect(res.body.message).to.equal('Manga created')

        })

    })



})