/**
 * @function checkPowerOfTwo
 * @param {number} num
 * @returns {boolean}
 */

export const checkPowerOfTwo = (num) => num > 0
  ? (num & (num - 1)) === 0
  : false;
