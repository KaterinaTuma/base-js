import { toDecimal } from '../toDecimal/index.js';
import { convertDecimalToBase } from '../convertDecimalToBase/index.js';

/**
 * @function convertBase
 * @param {string} input
 * @param {string} source
 * @param {string} target
 * @returns {string}
 */

export const convertBase = (input, source, target) => {
  const decimal = toDecimal(input, source);
  const convertedValue = convertDecimalToBase(decimal, target);
  return convertedValue;
};
