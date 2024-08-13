import { mergeArrays } from './mergeArrays.js';

const testData = {
  test1: {
    arr1: [1, 2, 3],
    arr2: [8, 7, 6],
    expectedArr: [1, 2, 3, 6, 7, 8],
  },
  test2: {
    arr1: [1, 2, 3],
    arr2: [8, 7, 6],
    expectedArr: [1, 2, 3, 6, 7, 8],
  },
  test3: {
    arr1: [1, 2, 3],
    arr2: [8, 7, 6],
    expectedArr: [1, 2, 3, 6, 7, 8],
  },
  test4: {
    arr1: [],
    arr2: [],
    expectedArr: [],
  },
  test5: {
    arr1: [4, 6, 9],
    arr2: [9, 7, 6, 5, 4, 1],
    expectedArr: [1, 4, 5, 6, 7, 9],
  },
};

describe('mergeArrays', () => {
  test('Unit test 1', () => {
    const test1 = testData.test1;
    const mergedArrays = mergeArrays(test1.arr1, test1.arr2);
    expect(test1.expectedArr).toEqual(mergedArrays);
  });

  test('Unit test 2', () => {
    const test2 = testData.test2;
    const mergedArrays = mergeArrays(test2.arr1, test2.arr2);
    expect(test2.expectedArr).toEqual(mergedArrays);
  });

  test('Unit test 3', () => {
    const test3 = testData.test3;
    const mergedArrays = mergeArrays(test3.arr1, test3.arr2);
    expect(test3.expectedArr).toEqual(mergedArrays);
  });

  test('Unit test 4', () => {
    const test4 = testData.test4;
    const mergedArrays = mergeArrays(test4.arr1, test4.arr2);
    expect(test4.expectedArr).toEqual(mergedArrays);
  });

  test('Unit test 5', () => {
    const test5 = testData.test5;
    const mergedArrays = mergeArrays(test5.arr1, test5.arr2);
    expect(test5.expectedArr).toEqual(mergedArrays);
  });
});
