import { calcAvg } from './calcAvg.js';

const testData = {
  test1: {
    nums: [1, 2, 3],
    expectedAvg: 2,
  },

  test2: {
    nums: [10, 22],
    expectedAvg: 16,
  },

  test3: {
    nums: [120, 522, 568, 158, 245],
    expectedAvg: 322.6,
  },
};

describe('calcAvg', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const avg = calcAvg(test1.nums);
    expect(avg).toBe(test1.expectedAvg);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const avg = calcAvg(test2.nums);
    expect(avg).toBe(test2.expectedAvg);
  });

  test('Unit test3', () => {
    const test3 = testData.test3;
    const avg = calcAvg(test3.nums);
    expect(avg).toBe(test3.expectedAvg);
  });
});
