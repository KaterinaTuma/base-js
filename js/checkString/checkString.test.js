import { checkString } from './checkString.js';

const testData = {
  test1: {
    str: 1,
    expectedIsString: false,
  },

  test2: {
    str: 'some string',
    expectedIsString: true,
  },
};

describe('checkString', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const isString = checkString(test1.str);
    expect(isString).toEqual(test1.expectedIsString);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const isString = checkString(test2.str);
    expect(isString).toEqual(test2.expectedIsString);
  });
});
