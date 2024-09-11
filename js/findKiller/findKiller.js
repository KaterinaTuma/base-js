/**
 * @function findKiller
 * @param {object} suspectInfo
 * @param {string[]} dead
 * @returns {string}
 */

export const findKiller = (suspectInfo, dead) => {
  const killerInfo = Object.entries(suspectInfo)
    .find(([key, value]) =>
      dead.every((item) =>
        value.includes(item)));


  return killerInfo ? killerInfo[0] : 'not find';
};
