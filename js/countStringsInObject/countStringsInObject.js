import { checkString } from '../checkString/index.js';

/**
 * @function countStringsInObject
 * @param {object} obj
 * @returns {number}
 */

export const countStringsInObject = (obj) => {
  let count = 0;

  /**
   * @function countStrings
   * @param {*} item
   * @returns {void};
   */

  const countStrings = (item) => {
    if (typeof item === 'object' && item !== null) {
      Object.values(item).forEach(countStrings);
    } else if (checkString(item)) {
      count += 1;
    };
  };

  countStrings(obj);
  return count;
};
