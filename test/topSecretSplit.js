'use stricts'

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const PORT = process.env.PORT || 3000;
const url = `http://localhost:${PORT}`;
const testcase = {
              "distance": 100,
              "message": ["este", "", "", "mensaje", ""]
};
describe('cargar un nuevo satellite: ', () => {
  it('debe tener la propiedad posición y mensaje', (done) => {
    chai.request(url)
      .post('/topsecret_split/:satellite')
      .send(testcase)
      .end((err, res) =>{
        expect(res).to.have.status(200)
        expect(res.body).to.be.true;
        done();
      });
  });
});

describe('obtener todos los satellites y calcular: ', () => {
  it('debe tener la propiedad posición y mensaje', (done) => {
    chai.request(url)
      .get('/topsecret_split/')
      .send()
      .end((err, res) =>{
        expect(res).to.have.status(200)
        expect(res.body).to.have.own.property('pos');
        expect(res.body).to.have.own.property('msg');
        done();
      });
  });
});
