import { splitIntoChunks } from '../splitIntoChunks/splitIntoChunks.js';

/**
 * @function binaryToMorse
 * @param {string} binary
 * @returns {string}
 */

export const binaryToMorse = (binary) => {
  const MORSE_SYMBOLS = {
    '10': '.',
    '11': '-',
    '**': ' ',
  };

  return splitIntoChunks(binary.replace(/^0+/, ''), 2)
    .map((code) => MORSE_SYMBOLS[code])
    .join('')
    .replace(/\s+/g, ' ');
};
