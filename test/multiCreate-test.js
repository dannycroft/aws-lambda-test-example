const expect = require('chai').expect; // chai used for example purposes
const runLambda = require('aws-lambda-test-helper');

module.exports = (config) => {
  describe('#multiCreate()', () => {
    it('should run successfully', (done) => {
      runLambda(config).then(done()).catch((err) => {
        done(err);
      });
    });

    it('should return correct response', (done) => {
      runLambda(config).then(response => {
        var mockResp = '"Your Serverless function \'multi/create\' ran successfully!"';

        expect(response.statusCode).to.equal(200);
        expect(response.body).to.equal(mockResp);
        done();
      }).catch((err) => {
        done(err);
      });
    });
  });
}
