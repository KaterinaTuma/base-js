import { sumObjectValues } from '../sumObjectValues/sumObjectValues.js';

/**
* @typedef {import('./types').Diary} Diary
*/

/**
* @function whoseBicycle
* @param {Diary} diary1
* @param {Diary} diary2
* @param {Diary} diary3
* @returns {string}
*/

export const whoseBicycle = (diary1, diary2, diary3) => {
  const ageTable = {
    'firstSonAge': 14,
    'secondSonAge': 9,
    'thirdSonAge': 8,
  };

  const ageArr = Object.values(ageTable);

  const sumArr = [diary1, diary2, diary3].map((diary) => sumObjectValues(diary));
  const maxSum = Math.max(...sumArr);

  const sonIndices = [];

  sumArr.forEach((sum, index) => {
    if (sum === maxSum) sonIndices.push(index);
  });

  sonIndices.sort((sonA, sonB) => ageArr[sonA] - ageArr[sonB]);

  const numeral = ['first', 'second', 'third'];

  return `I need to buy a bicycle for my ${numeral[sonIndices[0]]} son.`;
};

