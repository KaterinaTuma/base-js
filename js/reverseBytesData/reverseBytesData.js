import { splitArrayIntoChunks } from '../splitArrayIntoChunks/splitArrayIntoChunks.js';

/**
 * @function reverseBytesData
 * @param {number[]} data
 * @returns {number[]}
 */

export const reverseBytesData = (data) => {
  return splitArrayIntoChunks(data, 8)
    .reverse()
    .flat();
};
