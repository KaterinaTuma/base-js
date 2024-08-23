import { calcAvgCrades } from './calcAvgGrades.js';
/**
 * @typedef {import('./types.js').TestData} TestData
 */

/** @type {TestData} */
const testData = {
  test1: {
    students: [
      { firstName: 'Ivan', lastName: 'Ivanov', grades: [3, 4, 5] },
      { firstName: 'Petr', lastName: 'Petrov', grades: [5, 5, 4] },
      { firstName: 'Sidor', lastName: 'Sidorov', grades: [2, 3, 3] },
    ],
    expectedStudentsAvgGrades: [
      { lastName: 'Ivanov', avgGrade: 4 },
      { lastName: 'Petrov', avgGrade: 4.67 },
      { lastName: 'Sidorov', avgGrade: 2.67 },
    ],
  },

  test2: {
    students: [
      { firstName: 'Anna', lastName: 'Smirnova', grades: [5, 4, 4, 5] },
      { firstName: 'Olga', lastName: 'Kuznetsova', grades: [3, 3, 4, 4] },
    ],
    expectedStudentsAvgGrades: [
      { lastName: 'Smirnova', avgGrade: 4.5 },
      { lastName: 'Kuznetsova', avgGrade: 3.5 },
    ],
  },

  test3: {
    students: [
      { firstName: 'Elena', lastName: 'Alexandrova', grades: [3, 3, 3] },
    ],
    expectedStudentsAvgGrades: [
      { lastName: 'Alexandrova', avgGrade: 3 },
    ],
  },
};

describe('calcAvg', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const studentAvgGrades = calcAvgCrades(test1.students);
    expect(studentAvgGrades).toEqual(test1.expectedStudentsAvgGrades);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const studentAvgGrades = calcAvgCrades(test2.students);
    expect(studentAvgGrades).toEqual(test2.expectedStudentsAvgGrades);
  });

  test('Unit test3', () => {
    const test3 = testData.test3;
    const studentAvgGrades = calcAvgCrades(test3.students);
    expect(studentAvgGrades).toEqual(test3.expectedStudentsAvgGrades);
  });
});
