/**
 * Parse the result of a map. If the result is invalid, return null.
 *
 * @param {string} mapResult - Map result ('X:X (X:X; X:X)' format).
 * @returns {object} Team results if valid format.
 */
const parseMapResult = (mapResult) => {
  const parsed = mapResult.match(/^(\d+:\d+)/i);
  console.log(parsed);
  if (!parsed) {
    return { isValid: false };
  }

  const [, score] = parsed;

  const [team1Score, team2Score] = score.split(':');

  return {
    isValid: true,
    team1: +team1Score,
    team2: +team2Score,
  };
};

/**
 * Compute the score of a match from its maps results.
 *
 * @param {object[]} matchMaps - Match maps.
 * @returns {object} Match result.
 */
const parseMatchResult = (matchMaps) => matchMaps.reduce(
  (acc, matchMap) => {
    const score = parseMapResult(matchMap.result);
    console.log(score.team1);
    console.log(score.team2);
    if (score.isValid) {
      acc.team1 += (score.team1 > score.team2) ? 1 : 0;
      acc.team2 += (score.team1 < score.team2) ? 1 : 0;
    }

    return acc;
  },
  {
    team1: 0,
    team2: 0,
  },
);

module.exports = {
  parseMapResult,
  parseMatchResult,
};
