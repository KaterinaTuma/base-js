import { user } from './data.js';
import { toCapitalize } from './utils.js';
import { maskString } from './utils.js';
import { checkNumber } from './utils.js';
import { generateGreeting } from './utils.js';

console.log(toCapitalize(user.firstName));

console.log(maskString(user.middleName));

console.log(checkNumber(user.age));

console.log(generateGreeting(user));
