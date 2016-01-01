# README

## How did you make this?

### Setup basic express app

1. `$ express exp-with-testing`
1. `$ cd exp-with-testing`
1. `$ touch README.md` and start taking step by step notes
1. `$ git init`
1. `$ npm install`
1. `$ DEBUG=exp-with-testing:* npm start`
1. open browser and visit http://localhost:3000/
1. `$ touch .gitignore`
1. `$ echo "node_modules" > .gitignore`

### Add testing frameworks, test GET request

1. `$ npm install --save-dev mocha chai supertest`
1. `$ mkdir test`
1. `$ touch test/homepage.test.js`
1. open `test/homepage.test.js` and require supertest and your app

  ```
  var request = require('supertest'),
          app = require('../app')
  ```

1. add a simple test to `test/homepage.test.js` (the last expect is checking regex)

  ```
  describe("homepage", function() {
    it("welcomes the user", function(done) {
      request(app).get("/")
        .expect(200)
        .expect(/Greetings, user!/, done)
    })
  })
  ```

1. run the test to see it fail `$ node_modules/.bin/mocha`
1. go to `routes/index.js` and change the title from `Express` to `Greetings, user!`
1. rerun the test
1. restart the server, and checkout the browser

### Testing a POST then GET request

1. Add following test (post will redirect with status code 302)

  ```
  describe("contact form", function() {
    it("thanks the user after they fill out the contact form", function(done) {
      request(app).post("/contact")
        .send({name: "Elowyn"})
        .expect(302)
        .expect('Location', /\/thank-you/, done)
    })
  })
  ```

1. run the test to see it fail
1. add the route to `routes/index.js`

  ```
  router.post('/contact', function(req, res, next) {
    res.redirect('/thank-you');
  });
  ```

1. rerun the test
  * the test passes, but we aren't really doing anything.
  * we can add `console.log(req.body.name)` to the post route before we redirect and see that our POST data is coming through.
  * how do we know what is happening after that redirect (supertest can't follow redirects)?
1. replace the `done` callback in that last test with the following function:

  ```
  function() {
    request(app).get('/thank-you')
      .expect(200)
      .expect(/Thank you/, done)
  }
  ```

1. rerun the test
1. add the route

  ```
  router.get('/thank-you', function(req, res, next) {
    res.render('index', { title: 'Thank you!' });
  });
  ```
