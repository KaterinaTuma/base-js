/**
* @function sentenceFromOrderedDict
* @param {object[]} wordsData
* @returns {string}
*/

export const sentenceFromOrderedDict = (wordsData) => {
  const sentence = wordsData
    .sort((arr1, arr2) => {
      const keyWordData1 = Number(Object.keys(arr1)[0]);
      const keyWordData2 = Number(Object.keys(arr2)[0]);
      return keyWordData1 - keyWordData2;
    })
    .map((wordData) => Object.values(wordData))
    .join(' ');

  return sentence;
};
