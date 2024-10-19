/**
 * @function toDecimal
 * @param {*} input
 * @param {string} sourceAlphabet
 * @returns {number}
 */

export const toDecimal = (input, sourceAlphabet) => {
  const base = sourceAlphabet.length;

  return [...input].reduce((decimal, current) => {
    return decimal * base + sourceAlphabet.indexOf(current);
  }, 0);
};
