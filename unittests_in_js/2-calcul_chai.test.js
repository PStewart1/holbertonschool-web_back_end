// tests for 1-calcul.js
const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should add the 2 numbers together', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should round the first number and add them', () => {
      expect(calculateNumber('SUM', 1.4, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
    });
    it('should round the second number and add them', () => {
      expect(calculateNumber('SUM', 1, 3.4)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.5)).to.equal(5);
    });
    it('should round both numbers and add them', () => {
      expect(calculateNumber('SUM', 1.4, 3.4)).to.equal(4);
      expect(calculateNumber('SUM', 1.5, 3.4)).to.equal(5);
      expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
    });
  });
  describe('type SUBTRACT', () => {
    it('should subtract the 2 numbers', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3, 3)).to.equal(0);
    });
    it('should round the first number and subtract them', () => {
      expect(calculateNumber('SUBTRACT', 3.0, 1)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1.4, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3.5, 3)).to.equal(1);
    });
    it('should round the second number and subtract them', () => {
      expect(calculateNumber('SUBTRACT', 3, 1.0)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1, 3.4)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3, 3.5)).to.equal(-1);
    });
    it('should round both numbers and subtract them', () => {
      expect(calculateNumber('SUBTRACT', 3.4, 1.4)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1.5, 3.4)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 3.4, 3.5)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 3.5, 3.5)).to.equal(0);
    });
  });
  describe('type DIVIDE', () => {
    it('should divide the 2 numbers', () => {
      expect(calculateNumber('DIVIDE', 2, 1)).to.equal(2);
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 3, 3)).to.equal(1);
      expect(calculateNumber('DIVIDE', 0, 3)).to.equal(0);
    });
    it('should return Error if b == 0', () => {
      expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
    });
    it('should round the first number and divide them', () => {
      expect(calculateNumber('DIVIDE', 3.0, 1)).to.equal(3);
      expect(calculateNumber('DIVIDE', 1.4, 2)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 3.5, 2)).to.equal(2);
    });
    it('should round the second number and divide them', () => {
      expect(calculateNumber('DIVIDE', 3, 1.0)).to.equal(3);
      expect(calculateNumber('DIVIDE', 1, 2.4)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 3, 3.5)).to.equal(0.75);
    });
    it('should round both numbers and divide them', () => {
      expect(calculateNumber('DIVIDE', 3.4, 1.4)).to.equal(3);
      expect(calculateNumber('DIVIDE', 1.5, 2.4)).to.equal(1);
      expect(calculateNumber('DIVIDE', 3.4, 3.5)).to.equal(0.75);
      expect(calculateNumber('DIVIDE', 3.5, 3.5)).to.equal(1);
    });
  });
});
