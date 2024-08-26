import { checkEven } from './checkEven.js';

const testData = {
  test1: {
    num: 1,
    expectedIsEven: false,
  },

  test2: {
    num: 2,
    expectedIsEven: true,
  },

  test3: {
    num: 3,
    expectedIsEven: false,
  },

  test4: {
    num: 4,
    expectedIsEven: true,
  },

  test5: {
    num: 5,
    expectedIsEven: false,
  },

  test6: {
    num: 6,
    expectedIsEven: true,
  },
};

describe('checkEven', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const isEven = checkEven(test1.num);
    expect(isEven).toEqual(test1.expectedIsEven);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const isEven = checkEven(test2.num);
    expect(isEven).toEqual(test2.expectedIsEven);
  });

  test('Unit test3', () => {
    const test3 = testData.test3;
    const isEven = checkEven(test3.num);
    expect(isEven).toEqual(test3.expectedIsEven);
  });

  test('Unit test4', () => {
    const test4 = testData.test4;
    const isEven = checkEven(test4.num);
    expect(isEven).toEqual(test4.expectedIsEven);
  });

  test('Unit test5', () => {
    const test5 = testData.test5;
    const isEven = checkEven(test5.num);
    expect(isEven).toEqual(test5.expectedIsEven);
  });

  test('Unit test6', () => {
    const test6 = testData.test6;
    const isEven = checkEven(test6.num);
    expect(isEven).toEqual(test6.expectedIsEven);
  });
});
