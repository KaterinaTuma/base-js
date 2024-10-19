import { convertDecimalToBase } from './convertDecimalToBase.js';

const Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

const testData = {
  test1: {
    decimal: 0,
    targetAlphabet: '01',
    expectedValue: '0',
  },
  test2: {
    decimal: 156,
    targetAlphabet: '01',
    expectedValue: '10011100',
  },
  test3: {
    decimal: 255,
    targetAlphabet: '0123456789abcdef',
    expectedValue: 'ff',
  },
  test4: {
    decimal: 63,
    targetAlphabet: '01234567',
    expectedValue: '77',
  },
  test5: {
    decimal: 12345,
    targetAlphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
    expectedValue: '9ix',
  },
  test6: {
    decimal: 27,
    targetAlphabet: 'abcdefghijklmnopqrstuvwxyz',
    expectedValue: 'bb',
  },
};

describe('convertDecimalToBase', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const value = convertDecimalToBase(test1.decimal, test1.targetAlphabet);
    expect(test1.expectedValue).toEqual(value);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const value = convertDecimalToBase(test2.decimal, test2.targetAlphabet);
    expect(test2.expectedValue).toEqual(value);
  });

  test('Unit test3', () => {
    const test3 = testData.test3;
    const value = convertDecimalToBase(test3.decimal, test3.targetAlphabet);
    expect(test3.expectedValue).toEqual(value);
  });

  test('Unit test4', () => {
    const test4 = testData.test4;
    const value = convertDecimalToBase(test4.decimal, test4.targetAlphabet);
    expect(test4.expectedValue).toEqual(value);
  });

  test('Unit test6', () => {
    const test6 = testData.test6;
    const value = convertDecimalToBase(test6.decimal, test6.targetAlphabet);
    expect(test6.expectedValue).toEqual(value);
  });
});
