'use stricts'

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const PORT = process.env.PORT || 3000;
const url = `http://localhost:${PORT}`;
const testcase = {
  "satellites": 
      [
          {
              "name": "kenobi",
              "distance": 207.5,
              "message": ["este", "", "", "mensaje", ""]
          },
          {
              "name": "skywalker",
              "distance": 236.9,
              "message": ["", "es", "", "", "secreto"],
          },
          {
              "name": "sato",
              "distance": 219.1,
              "message": ["este", "", "un", "", ""]
          }
      ]
  };
describe('calcular la posición del carguero imperial: ', () => {
  it('debe tener la propiedad posicion y mensaje', (done) => {
    chai.request(url)
      .post('/topsecret')
      .send(testcase)
      .end((err, res) =>{
        expect(res).to.have.status(200)
        expect(res.body).to.have.own.property('pos');
        expect(res.body).to.have.own.property('msg');
        done();
      });
  });
  it('pos debe tener x e y', (done) => {
    chai.request(url)
      .post('/topsecret')
      .send(testcase)
      .end((err, res) =>{
        expect(res).to.have.status(200)
        expect(res.body.pos).to.have.own.property('x');
        expect(res.body.pos).to.have.own.property('y');
        done()
      })
  })
})
