import { checkVowel } from '../checkVowel/checkVowel.js';

/**
 * @function vowelOne
 * @param {string} str
 * @returns {string}
 */

export const vowelOne = (str) => {
  return [...str].map((char) => checkVowel(char) ? 1 : 0).join('');
};
