/**
 * @function mergeArrays
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

export const mergeArrays = (arr1, arr2) => {
  const sortedList = [...arr1, ...arr2]
    .sort((num1, num2) => num1 - num2);
  const uniqueList = new Set(sortedList);
  return [...uniqueList];
};
