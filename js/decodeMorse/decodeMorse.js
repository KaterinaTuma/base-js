import { splitIntoChunks } from '../splitIntoChunks/splitIntoChunks.js';
import { binaryToMorse } from '../binaryToMorse/binaryToMorse.js';

/**
 *@function decodeMorse
 * @param {string} expr
 * @returns {string}
 */

export const decodeMorse = (expr) => {
  const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
  };

  return splitIntoChunks(expr, 10)
    .map((binary) => binaryToMorse(binary))
    .map((morse) => MORSE_TABLE[morse])
    .join('');
};

