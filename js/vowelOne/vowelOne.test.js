import { vowelOne } from './vowelOne.js';

const testData = {
  test1: {
    str: 'abceios',
    expectedStr: '1001110',
  },

  test2: {
    str: 'aeiou, abc',
    expectedStr: '1111100100',
  },
};

describe('vowelOne', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const newStr = vowelOne(test1.str);
    expect(newStr).toEqual(test1.expectedStr);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const newStr = vowelOne(test2.str);
    expect(newStr).toEqual(test2.expectedStr);
  });
});
