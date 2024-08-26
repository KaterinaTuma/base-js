import { oddEvenStringSort } from './oddEvenStringSort.js';

const testData = {
  test1: {
    str: 'CodeWars',
    expectedStr: 'CdWr oeas',
  },

  test2: {
    str: 'YCOLUE\'VREER',
    expectedStr: 'YOU\'RE CLEVER',
  },
};

describe('oddEvenStringSort', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const str = oddEvenStringSort(test1.str);
    expect(str).toEqual(test1.expectedStr);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const str = oddEvenStringSort(test2.str);
    expect(str).toEqual(test2.expectedStr);
  });
});

