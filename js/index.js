import { user } from './data.js';
import { toCapitalize } from './utils.js';
import { maskString } from './utils.js';
import { checkNumber } from './utils.js';
import { generateGreeting } from './utils.js';
import { numberToWords } from './utils.js';

console.log(toCapitalize(user.firstName));

console.log(maskString(user.middleName));

console.log(checkNumber(user.age));

console.log(generateGreeting(user));

console.log(numberToWords(0));
console.log(numberToWords(1));
console.log(numberToWords(15));
console.log(numberToWords(20));
console.log(numberToWords(25));
console.log(numberToWords(587));
console.log(numberToWords(2024));
console.log(numberToWords(user.age));
