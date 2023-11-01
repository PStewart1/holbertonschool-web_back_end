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

describe('get /cart/', () => {
  it('responds with correct status code and message', () => new Promise((done) => {
    request('http://localhost:7865/cart/1', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      done();
    });
  }));
  it('responds with 404 status code and message', () => new Promise((done) => {
    request('http://localhost:7865/cart/n', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});

describe('get /available_payments', () => {
  it('responds with correct status code and message', () => new Promise((done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  }));
});

describe('post /login', () => {
  it('responds with correct status code and message', () => new Promise((done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: {
        userName: 'Betty',
      },
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  }));
});
