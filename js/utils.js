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

/**
 * @function numberToWords
 * @description Converts given number (0-9999) to readable string.
 * @param {number} num
 * @returns {string}
 * @example numberToWords(587); // return 'five hundred eighty seven'
 */

export const numberToWords = (num) => {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (num < 10) return ones[num];
  if (num < 20) return teens[num % 10];
  if (num < 100) {
    const numTens = Math.floor(num / 10);
    const numOnes = num % 10;
    const phrase = `${tens[numTens]} ${numOnes !== 0 ? ones[numOnes] : ''}`;
    return phrase.trim();
  };
  if (num < 1000) {
    const numHundreds = Math.floor(num / 100);
    const numTensOnes = num % 100;
    const phrase = `${ones[numHundreds]} hundred ${numTensOnes !== 0 ? numberToWords(num % 100) : ''}`
    return phrase.trim();
  };
  if (num < 10000) {
    const numThousands = Math.floor(num / 1000);
    const numTensOnesHundreds = num % 1000;
    const phrase = `${ones[numThousands]} thousand ${numTensOnesHundreds !== 0 ? numberToWords(num % 1000) : ''}`
    return phrase.trim();
  }

  return 'Input number is out of the available range';
};

/**
 * @function sortPersonsNamesByHeight
 * @description Create sorted array of person names based on their corresponding heights.
 * @param { string[] } names
 * @param { number[] } heights
 * @returns { string[] }
 * @example 
 * sortPersonsNamesByHeight(["Alice","Bob","Bob"], [155,185,150]);
 * return ["Bob","Alice","Bob"]
 */

export const sortPersonsNamesByHeight = (names, heights) => {
  const nameHeightPairs = names.map((name, index) => (
    {
      name: name,
      height: heights[index],
    }
  ));

  const sortedNameHeightPairs = nameHeightPairs.sort(
    (personLeft, personRight) => personRight.height - personLeft.height
  );

  const sortedNames = sortedNameHeightPairs.map((person) => person.name);

  return sortedNames;
};
