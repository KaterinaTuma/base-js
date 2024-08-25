import { generateNickname } from './generateNickname.js';

const testData = {
  test1: {
    firstName: 'Robert',
    expectedNickname: 'Rob',
  },

  test2: {
    firstName: 'Kimberly',
    expectedNickname: 'Kim',
  },

  test3: {
    firstName: 'Samantha',
    expectedNickname: 'Sam',
  },

  test4: {
    firstName: 'Jeannie',
    expectedNickname: 'Jean',
  },

  test5: {
    firstName: 'Douglas',
    expectedNickname: 'Doug',
  },

  test6: {
    firstName: 'Dog',
    expectedNickname: 'Error: Name too short',
  },
};

describe('generateNickname', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const nickname = generateNickname(test1.firstName);
    expect(nickname).toEqual(test1.expectedNickname);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const nickname = generateNickname(test2.firstName);
    expect(nickname).toEqual(test2.expectedNickname);
  });

  test('Unit test3', () => {
    const test3 = testData.test3;
    const nickname = generateNickname(test3.firstName);
    expect(nickname).toEqual(test3.expectedNickname);
  });

  test('Unit test4', () => {
    const test4 = testData.test4;
    const nickname = generateNickname(test4.firstName);
    expect(nickname).toEqual(test4.expectedNickname);
  });

  test('Unit test5', () => {
    const test5 = testData.test5;
    const nickname = generateNickname(test5.firstName);
    expect(nickname).toEqual(test5.expectedNickname);
  });

  test('Unit test6', () => {
    const test6 = testData.test6;
    const nickname = generateNickname(test6.firstName);
    expect(nickname).toEqual(test6.expectedNickname);
  });
});

