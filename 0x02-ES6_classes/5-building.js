/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (!this.evacuationWarningMessage && this.constructor !== Building) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    } else {
      this._sqft = sqft;
    }
  }
}
