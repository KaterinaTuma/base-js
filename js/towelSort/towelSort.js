/**@typedef {number[]} NumArr*/

/**
 * @function towelSort
 * @param {NumArr[]} matrix
 * @returns {number[]}
 */

export const towelSort = (matrix) => {
  if (!matrix || matrix.length === 0) return [];

  return matrix.reduce((arr, row, index) => {
    index % 2 === 0
      ? row.sort((num1, num2) => num1 - num2)
      : row.sort((num1, num2) => num2 - num1);

    arr.push(...row);
    return arr;
  }, []);
};
