/**
 * @function convertDecimalToBase
 * @param {number} decimal
 * @param {string} targetAlphabet
 * @returns {string}
 */

export const convertDecimalToBase = (decimal, targetAlphabet) => {
  if (decimal === 0) return targetAlphabet[0];

  let targetValue = '';
  const base = targetAlphabet.length;

  while (decimal > 0) {
    const remainder = decimal % base;
    targetValue = targetAlphabet[remainder] + targetValue;
    decimal = Math.floor(decimal / base);
  }

  return targetValue;
};
