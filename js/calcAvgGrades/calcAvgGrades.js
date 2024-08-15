import { calcAvg } from '../calcAvg/calcAvg.js';

/**
 * @typedef {object} Students
 * @property {string} firstName
 * @property {string} lastName
 * @property {number[]} grades
 */

/**
 * @typedef {object} StudentAvgGrades
 * @property {string} lastName
 * @property {number} avgGrade
 */

/**
 *@function calcAvgCrades
 * @param {Students[]} students
 * @returns {StudentAvgGrades[]}
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
