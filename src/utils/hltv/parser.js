/**
 * Parse the result of a map. If the result is invalid, return null.
 *
 * @param {string} mapResult - Map result ('X:X (X:X; X:X)' format).
 * @returns {object} Team results if valid format.
 */
const parseMapResult = (mapResult) => {
  /*const parsed = mapResult.match(/^(\d+:\d+)/i);

  if (!parsed) {
    return { isValid: false };
  }

  const [, score] = parsed;
  */
  const r1 = mapResult.substring(0, mapResult.indexOf('\n'));
  r1 = r1.replace(";", "");
  r1 = r1.split(' ');

  const score1 = 0;
  const score2 = 0;
  for (var i = 0; i < r1.length; i++) {
    var score = r1[i].split(":");
    score1 = score1 + parseInt(score[0].replace("(", ""));
    score2 = score2 + parseInt(score[1].replace(")", ""));
  }

  const [team1Score, team2Score] = score.split(':');

  return {
    isValid: true,
    //team1: +team1Score,
    //team2: +team2Score,
    team1: score1,
    team2: score2,
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
