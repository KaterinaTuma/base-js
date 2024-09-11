/**
 * @function minimizeSumOfArray
 * @param {number[]} arr
 * @returns {number}
 */

export const minimizeSumOfArray = (arr) => {
  const sortedArr = [...arr].sort((num1, num2) => num1 - num2);
  const halfLength = sortedArr.length / 2;

  const smallerNumsHalf = sortedArr.slice(0, halfLength);
  const largerNumHalf = sortedArr.slice(halfLength).reverse();

  const minSum =  smallerNumsHalf.reduce((sum, smallNum, index) => {
    return sum + smallNum * (largerNumHalf[index]);
  }, 0);

  return minSum;
};
