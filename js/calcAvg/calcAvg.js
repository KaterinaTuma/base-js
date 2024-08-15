/**
 * @function calcAvg
 * @param {number[]} nums
 * @returns {number}
 */

export const calcAvg = (nums) => {
  const sum = nums.reduce((sum, num) => sum + num, 0);
  return Number((sum / nums.length).toFixed(2));
};
