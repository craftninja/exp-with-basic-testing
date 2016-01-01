var request = require('supertest'),
        app = require('../app')

describe("homepage", function() {
  it("welcomes the user", function(done) {
    request(app).get("/")
      .expect(200)
      .expect(/Greetings, user!/, done)
  })
})

describe("contact form", function() {
  it("thanks the user after they fill out the contact form", function(done) {
    request(app).post("/contact")
      .send({name: "Elowyn"})
      .expect(302)
      .expect('Location', /\/thank-you/, function() {
        request(app).get('/thank-you')
          .expect(200)
          .expect(/Thank you/, done)
      })
  })
})
