/**
 * @function splitIntoChunks
 * @param {string} str
 * @param {number} chunkSize
 * @returns {string[]}
 */

export const splitIntoChunks = (str, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }

  return chunks;
};
