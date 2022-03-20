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
  it('debe tener la propiedad distance y message', (done) => {
    chai.request(url)
      .post('/topsecretSplit/:satellite')
      .send(testcase)
      .end((err, res) =>{
        expect(res).to.have.status(200)
        done();
      });
  });
})
