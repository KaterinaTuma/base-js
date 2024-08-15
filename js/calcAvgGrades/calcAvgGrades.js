import { calcAvg } from '../calcAvg/calcAvg.js';

/**
 * @typedef {import('./types.js').Students} Students
 * @typedef {import('./types.js').StudentsAvgGrades} StudentsAvgGrades
 */

/**
 * @function calcAvgCrades
 * @param {Students[]} students
 * @returns {StudentsAvgGrades[]}
 */

export const calcAvgCrades = (students) => {
  return students.map((student) => {
    const avgGrade = calcAvg(student.grades);

    return {
      lastName: student.lastName,
      avgGrade,
    };
  });
};
