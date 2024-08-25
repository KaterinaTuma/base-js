import { checkVowel } from '../checkVowel/checkVowel.js';

/**
 * @function generateNickname
 * @param {string} firstName
 * @returns {string}
 */

export const generateNickname = (firstName) => {
  if (firstName.length < 4) return 'Error: Name too short';
  return checkVowel(firstName.charAt(2)) ? firstName.slice(0, 4) : firstName.slice(0, 3);
};
