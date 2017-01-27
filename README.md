# Testing the serverless lambda boilerplate

A simple example of testing serverless lambda handlers using
the [aws-lambda-test-helper](https://www.npmjs.com/package/aws-lambda-test-helper).

Taking the [serverless-starter](https://github.com/serverless/serverless-starter)
and setting up a test boilerplate using the  [aws-lambda-test-helper](https://www.npmjs.com/package/aws-lambda-test-helper) module.

## Example

**test/runAll.js**
```javascript
const singleAll = require('./singleAll-test');
const multiShow = require('./multiShow-test');
const multiCreate = require('./multiCreate-test');

describe('Lambda Test', () => {
  singleAll({ e: './test/mock/event', fn: './single', handler: 'handler' });
  multiShow({ e: './test/mock/event', fn: './multiShow', handler: 'handler' });
  multiCreate({ e: './test/mock/event', fn: './multiCreate', handler: 'handler' });
});
```

**test/singleAll-test.js**
```javascript
const expect = require('chai').expect;
const runLambda = require('aws-lambda-test-helper');

module.exports = (config) => {
  describe('#single()', () => {
    it('should run successfully', (done) => {
      runLambda(config).then(done()).catch((err) => {
        done(err);
      });
    });

    it('should return correct response', (done) => {
      runLambda(config).then(response => {
        var mockResp = '"Your Serverless function ran successfully via the \'GET\' method!"';
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.equal(mockResp);
        done();
      }).catch((err) => {
        done(err);
      });
    });
  });
}
```
## Run
`npm run test`
