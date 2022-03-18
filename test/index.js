'use stricts'

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const PORT = process.env.PORT || 3000
const url = `http://localhost:${PORT}`
describe('calculate packer from json data: ', () => {
  it('debe tener la propiedad satellites', (done) => {
    chai.request(url)
      .post('/topsecret')
      .send({
        "satellites": 
            [
                {
                    "name": "kenobi",
                    "distance": 100.0,
                    "message": ["este", "", "", "mensaje", ""]
                },
                {
                    "name": "skywalker",
                    "distance": 115.5,
                    "message": ["", "es", "", "", "secreto"],
                },
                {
                    "name": "sato",
                    "distance": 142.7,
                    "message": ["este", "", "un", "", ""]
                }
            ]
        })
      .end((err, res) =>{
        expect(res).to.have.status(200)
        //expect(res.body).to.have.own.property('satellites');
        done()
      })
  })
})
