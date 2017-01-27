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
