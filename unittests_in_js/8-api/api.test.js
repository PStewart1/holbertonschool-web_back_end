// /* eslint-disable jest/lowercase-name */
/* eslint-disable jest/valid-expect */
const request = require('request');
const { expect } = require('chai');

describe('get /', () => {
  it('responds with correct status code and message', () => new Promise((done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
