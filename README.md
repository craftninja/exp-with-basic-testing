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
