// Hooks are useful functions that can be called before execution of one or all tests in a suite

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spy.restore();
  });

  it('should return 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
  it('should return 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
