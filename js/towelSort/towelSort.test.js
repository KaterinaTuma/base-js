import { towelSort } from './towelSort.js';

const testData = {
  test1: {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expectedArr: [1, 2, 3, 6, 5, 4, 7, 8, 9],
  },
  test2: {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    expectedArr: [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13],
  },
  test3: {
    matrix: [
      [1, 2, 4],
      [5, 6, 7, 8],
      [9, 12],
    ],
    expectedArr: [1, 2, 4, 8, 7, 6, 5, 9, 12],
  },


};

describe('mergeArrays', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const sortedArr = towelSort(test1.matrix);
    expect(test1.expectedArr).toEqual(sortedArr);
  });
  test('Unit test2', () => {
    const test2 = testData.test2;
    const sortedArr = towelSort(test2.matrix);
    expect(test2.expectedArr).toEqual(sortedArr);
  });
  test('Unit test3', () => {
    const test3 = testData.test3;
    const sortedArr = towelSort(test3.matrix);
    expect(test3.expectedArr).toEqual(sortedArr);
  });
});
