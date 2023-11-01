// add a new suite named sendPaymentRequestToApi

const { spy } = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should output the correct message', () => {
    const consoleSpy = spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    consoleSpy.restore();
  });
});
