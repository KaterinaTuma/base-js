import { countStringsInObject } from './countStringsInObject.js';

const testData = {
  test1: {
    obj: {
      first: '1',
      second: '2',
      third: false,
      fourth: ['anytime', 2, 3, 4],
      fifth: null,
    },
    expectedCount: 3,
  },

  test2: {
    obj: {
      first: 'hello',
      second: 'world',
      third: { nested: 'string', deepNested: { deeper: 'deep' } },
      fourth: [true, 'another', { inner: 'inside string' }],
    },
    expectedCount: 6,
  },
  test3: {
    obj: {
      first: 123,
      second: true,
      third: [false, null, { nested: [undefined, 'string here'] }],
    },
    expectedCount: 1,
  },
  test4: {
    obj: {
      first: [],
      second: {},
      third: null,
      fourth: undefined,
    },
    expectedCount: 0,
  },
  test5: {
    obj: {
      nested: {
        level1: {
          level2: {
            level3: {
              level4: ['deeply nested string', 'another'],
            },
          },
        },
      },
    },
    expectedCount: 2,
  },
};

describe('countStringsInObject', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const count = countStringsInObject(test1.obj);
    expect(count).toEqual(test1.expectedCount);
  });
  test('Unit test2', () => {
    const test2 = testData.test2;
    const count = countStringsInObject(test2.obj);
    expect(count).toEqual(test2.expectedCount);
  });
  test('Unit test3', () => {
    const test3 = testData.test3;
    const count = countStringsInObject(test3.obj);
    expect(count).toEqual(test3.expectedCount);
  });
  test('Unit test4', () => {
    const test4 = testData.test4;
    const count = countStringsInObject(test4.obj);
    expect(count).toEqual(test4.expectedCount);
  });
  test('Unit test5', () => {
    const test5 = testData.test5;
    const count = countStringsInObject(test5.obj);
    expect(count).toEqual(test5.expectedCount);
  });
});
