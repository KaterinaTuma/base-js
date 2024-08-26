import { checkVowel } from './checkVowel.js';

const testData = {
  test1: {
    char: 'o',
    expectedIsVowel: true,
  },

  test2: {
    char: 'm',
    expectedIsVowel: false,
  },

  test3: {
    char: 'a',
    expectedIsVowel: true,
  },

  test4: {
    char: 'e',
    expectedIsVowel: true,
  },

  test5: {
    char: 's',
    expectedIsVowel: false,
  },

  test6: {
    char: 'u',
    expectedIsVowel: true,
  },
};

describe('generateNickname', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const isVowel = checkVowel(test1.char);
    expect(isVowel).toEqual(test1.expectedIsVowel);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const isVowel = checkVowel(test2.char);
    expect(isVowel).toEqual(test2.expectedIsVowel);
  });
});
