/* import chai from "chai"
import {expect} from "chai"
import supertest from "supertest";
import app from "../app.js"; 
import User from "../models/User.js";

const request = supertest(app);
describe ("set de test auth/verify/:verify_code", () => { 
  before (function(done){
    this.timeout(3000)
    setTimeout(done, 2500)
  })
describe('GET /auth/verify/:verify_code', () => {
  it('Debería verificar con éxito una cuenta no verificada', (done) => {
    
    const usuarioDePrueba = new User({
      verify_code: 'bdba1f9a3f27ab052649',
      verified: false,
    });
    
    usuarioDePrueba.save((err, usuarioGuardado) => {
      if (err) return done(err);
      
      request
        .get(`/verify/${usuarioGuardado.verify_code}`)
        .expect(200)
        .end((error, res) => {
          if (error) return done(error);
          expect(res.body.message).to.equal("Cuenta verificada exitosamente.");
          done();
        });
    });
  });

  it('Debería devolver un error 400 para un código de verificación inválido o una cuenta ya verificada', (done) => {
    // Supongamos que tienes un usuario de prueba con verify_code verificado
    const usuarioDePrueba = new User({
      verify_code: 'acvnewi92emodsqisj129mxskal2121wsaz',
      verified: true,
    });
    
    usuarioDePrueba.save((err, usuarioGuardado) => {
      if (err) return done(err);
      
      request
        .get(`/verify/${usuarioGuardado.verify_code}`) // Reemplaza con la ruta real de tu endpoint de verificación
        .expect(400)
        .end((error, res) => {
          if (error) return done(error);
          expect(res.body.message).to.equal("Código de verificación inválido o cuenta ya verificada.");
          done();
        });
    });
  });


});

 })



 */




 import { expect } from "chai";
import app from '../app.js';
import supertest from 'supertest';




describe("set de test auth/verify/:verify_code", () => { 


    before (function(done){
      this.timeout(3000)
      setTimeout(done,2500)
    })


  describe("auth/verify/:verify_code", () => { 
    it("deberia retornar status 400, Código de verificación inválido o cuenta ya verificada.", async () => { 
      const response = await supertest(app)
        .get("/auth/verify/acvnewi92emodsqisj129mxskal2121wsaz")
        console.log(response.status)
        console.log(response.body)
        expect (response.status).to.equal(400);
        expect(response.body.message).to.be.equal("Código de verificación inválido o cuenta ya verificada.");
    });

    it("deberia retornar status 200, Cuenta verificada exitosamente.", async () => { 
        const response = await supertest(app)
          .get("/auth/verify/7d9073fce83857efe163")
          console.log(response.body)
          expect (response.status).to.equal(200);
          expect(response.body.message).to.be.equal("Cuenta verificada exitosamente.");
      });
  });
}); 