import chai from 'chai';
import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js'; 

describe ("set de test auth/google-signin", () => { 
  before (function(done){
    this.timeout(3000)
    setTimeout(done,2500)
  })

  describe("POST /google-signin",()=>{

    it("deberia retornar status 200, ", async () => { 
      const response = await request(app)
        .post("/auth/google-signin")
        .send({
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…Y1Mn0.G-wJ8V9ItvTVc64HQBq_IdwfGtar1NlXwUezJFpil3w"
        })
      
        expect(response.status).to.equal(200); 
      
      })
      it("deberia retornar status 401", async () =>{
        const response = await request(app)
        .post("/auth/google-signin")
        .send({
          idtoken:"134"
        })
        expect(response.status).to.equal(500); 
        expect(response.body.message[0]).to.be.equal("The verifyIdToken method requires an ID Token");


  })
   })
 
})



















  /* describe("set de test auth/google-signin", () => { 
    it("deberia retornar status 200, ", async () => { 
      const response = await supertest(app)
        .post("/auth/google-signin")
        .send({
          idToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…A2N30.qFaVEKvdR27WdwcW0ejW5XVa5tpb0XSFgnwvHOXDUY4'"
        })
      
        expect(response.status).to.equal(200); 
      
      })
      it("deberia retornar status 500", async () =>{
        const response = await supertest(app)
        .post("/auth/google-signin")
        .send({
          idtoken:""
        })
      })
        expect(response.body.message[0]).to.be.equal("The verifyIdToken method requires an ID Token");
   ;
});
} ) */
