/**
 * @function splitArrayIntoChunks
 * @param {any[]} arr
 * @param {number} chunkSize
 * @returns {any[]}
 */

export const splitArrayIntoChunks = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }

  return chunks;
};
