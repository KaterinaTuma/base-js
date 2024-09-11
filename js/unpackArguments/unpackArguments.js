/**
 * @function unpackArguments
 * @param {Function} funcName
 * @param {*[]} args
 * @returns {*}
 */

export const unpackArguments = (funcName, args) => {
  return funcName(...args);
};
