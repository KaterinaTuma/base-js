/**
 * @function sumObjectValues
 * @param  {Object} obj
 * @returns {number}
 */

export const sumObjectValues = (obj) => Object.values(obj)
  .reduce((sum, value) => sum + value, 0);
