import { convertBase } from './convertBase.js';

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
    input: '15',
    source: Alphabet.DECIMAL,
    target: Alphabet.BINARY,
    expectedValue: '1111',
  },

  test2: {
    input: '15',
    source: Alphabet.DECIMAL,
    target: Alphabet.OCTAL,
    expectedValue: '17',
  },

  test3: {
    input: '1010',
    source: Alphabet.BINARY,
    target: Alphabet.DECIMAL,
    expectedValue: '10',
  },

  test4: {
    input: '1010',
    source: Alphabet.BINARY,
    target: Alphabet.HEXA_DECIMAL,
    expectedValue: 'a',
  },
};

describe('convertDecimalToBase', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const convertedValue = convertBase(test1.input, test1.source, test1.target);
    expect(test1.expectedValue).toEqual(convertedValue);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const convertedValue = convertBase(test2.input, test2.source, test2.target);
    expect(test2.expectedValue).toEqual(convertedValue);
  });

  test('Unit test3', () => {
    const test3 = testData.test3;
    const convertedValue = convertBase(test3.input, test3.source, test3.target);
    expect(test3.expectedValue).toEqual(convertedValue);
  });

  test('Unit test4', () => {
    const test4 = testData.test4;
    const convertedValue = convertBase(test4.input, test4.source, test4.target);
    expect(test4.expectedValue).toEqual(convertedValue);
  });
});
