/**
 * @function checkVowel
 * @param {string} char
 * @returns {boolean}
 */

export const checkVowel = (char) => {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
};
