import { toDecimal } from './toDecimal.js';

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
    sourceAlphabet: Alphabet.DECIMAL,
    expectedDecimal: 15,
  },
  test2: {
    input: '1010',
    sourceAlphabet: Alphabet.BINARY,
    expectedDecimal: 10,
  },
  test3: {
    input: '17',
    sourceAlphabet: Alphabet.OCTAL,
    expectedDecimal: 15,
  },
  test4: {
    input: 'a',
    sourceAlphabet: Alphabet.HEXA_DECIMAL,
    expectedDecimal: 10,
  },
  test6: {
    input: '0',
    sourceAlphabet: Alphabet.DECIMAL,
    expectedDecimal: 0,
  },
  test7: {
    input: '1111',
    sourceAlphabet: Alphabet.BINARY,
    expectedDecimal: 15,
  },
  test8: {
    input: 'bb',
    sourceAlphabet: Alphabet.ALPHA_LOWER,
    expectedDecimal: 27,
  },
};


describe('toDecimal', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const decimal = toDecimal(test1.input, test1.sourceAlphabet);
    expect(test1.expectedDecimal).toEqual(decimal);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const decimal = toDecimal(test2.input, test2.sourceAlphabet);
    expect(test2.expectedDecimal).toEqual(decimal);
  });

  test('Unit test3', () => {
    const test3 = testData.test3;
    const decimal = toDecimal(test3.input, test3.sourceAlphabet);
    expect(test3.expectedDecimal).toEqual(decimal);
  });

  test('Unit test4', () => {
    const test4 = testData.test4;
    const decimal = toDecimal(test4.input, test4.sourceAlphabet);
    expect(test4.expectedDecimal).toEqual(decimal);
  });

  test('Unit test6', () => {
    const test6 = testData.test6;
    const decimal = toDecimal(test6.input, test6.sourceAlphabet);
    expect(test6.expectedDecimal).toEqual(decimal);
  });

  test('Unit test7', () => {
    const test7 = testData.test7;
    const decimal = toDecimal(test7.input, test7.sourceAlphabet);
    expect(test7.expectedDecimal).toEqual(decimal);
  });

  test('Unit test8', () => {
    const test8 = testData.test8;
    const decimal = toDecimal(test8.input, test8.sourceAlphabet);
    expect(test8.expectedDecimal).toEqual(decimal);
  });
});
