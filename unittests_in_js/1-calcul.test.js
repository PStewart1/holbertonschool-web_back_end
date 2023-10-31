// tests for 1-calcul.js
const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should add the 2 numbers together', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('should round the first number and add them', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
    });
    it('should round the second number and add them', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.4), 4);
      assert.strictEqual(calculateNumber('SUM', 1, 3.5), 5);
    });
    it('should round both numbers and add them', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.4), 4);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.4), 5);
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
    });
  });
  describe('type SUBTRACT', () => {
    it('should subtract the 2 numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 3), 0);
    });
    it('should round the first number and subtract them', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 1), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 3), 1);
    });
    it('should round the second number and subtract them', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1.0), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.4), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 3.5), -1);
    });
    it('should round both numbers and subtract them', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.4, 1.4), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.4), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.4, 3.5), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 3.5), 0);
    });
  });
  describe('type DIVIDE', () => {
    it('should divide the 2 numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 1), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 3, 3), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 0, 3), 0);
    });
    it('should return Error if b == 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
    });
    it('should round the first number and divide them', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 1), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 2), 2);
    });
    it('should round the second number and divide them', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 1.0), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2.4), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 3, 3.5), 0.75);
    });
    it('should round both numbers and divide them', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.4, 1.4), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 2.4), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 3.4, 3.5), 0.75);
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 3.5), 1);
    });
  });
});
