/**
 * @function calcSum
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */

export const calcSum = (num1, num2) => num1 + num2;

/**
 * @function toCapitalize
 * @param {string} str
 * @returns {string}
 */

export const toCapitalize = (str) => str
  ? `${str[0].toUpperCase()}${str.slice(1)}`
  : '';

/**
 * @function maskString
 * @description Changes all but the last N characters of a string into '#'.
 * @param {string} str
 * @param {number} countVisible
 * @returns {string}
 * @example maskString('someString', 5); // returns #####tring
 */

export const maskString = (str, countVisible = 4) => str
  ? str.slice(-countVisible).padStart(str.length, '#')
  : '';

/**
 * @function checkNumber
 * @param {*} value
 * @returns {boolean}
 */

export const checkNumber = (value) =>
  typeof value === 'number' && !isNaN(value);

/**
 * @typedef {'morning' | 'afternoon' | 'evening' | 'night'} TimeOfDay
 */

/**
 * @function getTimeOfDay
 * @returns {TimeOfDay}
 */

const getTimeOfDay = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  if (5 <= currentHour && currentHour < 12) return 'morning';
  if (12 <= currentHour && currentHour < 18) return 'afternoon';
  if (18 <= currentHour && currentHour < 22) return 'evening';

  return 'night';
};

/**
 * @typedef {object} User
 * @property {string} firstName
 * @property {string} middleName
 * @property {string} lastName
 * @property {number} age
 */

/**
 * @function generateGreeting
 * @param {User} user
 * @returns {string} Good night, Ivan Ivanovich!
 */

export const generateGreeting = (user) => {
  const timeOfDay = getTimeOfDay();
  const { firstName, middleName } = user;
  const greeting = `Good ${timeOfDay}, ${firstName} ${middleName}`;
  return `${greeting.trim()}!`;
};
