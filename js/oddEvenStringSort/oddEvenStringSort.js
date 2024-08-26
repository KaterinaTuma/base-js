import { checkEven } from '../checkEven/checkEven.js';

/**
 * @function oddEvenStringSort
 * @param {string} str
 * @returns {string}
 */

export const oddEvenStringSort = (str) => {
  const evenStr = [...str].filter((_, index) => checkEven(index)).join('');
  const oddStr = [...str].filter((_, index) => !checkEven(index)).join('');
  return `${evenStr} ${oddStr}`;
};
