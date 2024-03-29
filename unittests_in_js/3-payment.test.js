// add a new suite named sendPaymentRequestToApi

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should match calculateNumber', () => {
    const consoleSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('SUM', 100, 20)).to.be.true;
    consoleSpy.restore();
  });
});
