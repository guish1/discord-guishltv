const { getCountryFlagEmoji } = require('./flag');
const { parseMatchResult, parseMapResult } = require('../../utils/hltv/parser');

/**
 * Bolds the str if the condition is truthy.
 *
 * @param {string} str - String to format.
 * @param {boolean} condition - If true, set the string bold.
 * @returns {string} The input string, bold or not.
 */
const setBoldIf = (str, condition) => (
  condition
    ? `**${str}**`
    : str
);

/**
 * Format maps score to X:X / X:X / X:X.
 *
 * @param {object[]} maps - Maps from match result.
 * @returns {string} Formatted score.
 */
const formatMapsScore = (maps) => (
  maps.map((map) => {
    const parsedMapResult = parseMapResult(map.result);
    return parsedMapResult.isValid
      ? `${parsedMapResult.team1}:${parsedMapResult.team2}`
      : 'N/A';
  }).join(' / ')
  || 'N/A'
);

/**
 * Make slug from name (replace whitespaces by dashes and set lower case).
 *
 * @example
 * formatSlug('Ninjas in Pyjamas'); // -> 'ninjas-in-pyjamas'
 *
 * @param {string} name - Unformatted name.
 * @returns {string} Slug.
 */
const formatSlug = (name) => name.replace(/\s+/g, '-').toLowerCase();

/**
 * Format team rank if specified.
 *
 * @param {number} teamRank - Team ranking.
 * @returns {string} Formatted team rank.
 */
const formatTeamRank = (teamRank) => (teamRank !== undefined ? `(#${teamRank})` : '');

/**
 * Format a team information for display.
 *
 * @param {object} team - Team information.
 * @returns {object} Formatted data.
 */
const formatTeam = ({
  id,
  name,
  location,
  rank,
  logo,
}) => {
  const slug = formatSlug(name);
  const url = `https://www.hltv.org/team/${id}/${encodeURIComponent(slug)}`;
  return {
    id,
    name,
    slug,
    logo,
    location,
    url,
    rank,
    flag: getCountryFlagEmoji(location),
    link: `[${name}](${url} 'id: ${id}')`,
  };
};

/**
 * Format an event link in markdown.
 *
 * @param {object} event - Event info.
 * @param {number} event.id - Event id.
 * @param {string} event.name - Event name.
 * @returns {string} Event link as string.
 */
const formatEventLink = ({
  id,
  name,
}) => {
  const slug = formatSlug(name);
  return `[${name}](https://www.hltv.org/events/${id}/${encodeURIComponent(slug)} 'id: ${id}')`;
};

/**
 * For a match result message, format the team name as 'FLAG NAME (#RANK)'.
 *
 * @param {object} team - Team information from getTeam.
 * @returns {string} Formatted team header.
 */
const formatMatchResultTeam = (team) => {
  const { flag, link, rank } = formatTeam(team);
  return `${flag} ${link} ${formatTeamRank(rank)}`.replace(/\s+/g, ' ');
};

/**
 * Format match result.
 *
 * @param {object} match - Match information.
 * @param {object} team1 - Match team 1 full information.
 * @param {object} team2 - Match team 2 full information.
 * @returns {string} Match result.
 */
const formatMatchResult = (match, team1, team2) => {
  return JSON.stringify(match.maps);
  const teamScores = parseMatchResult(match.maps);
  const eventLink = formatEventLink(match.event);

  const team1WithScore = setBoldIf(
    `${formatMatchResultTeam(team1)} ${teamScores.team1}`,
    match.winnerTeam.id === team1.id,
  );

  const team2WithScore = setBoldIf(
    `${teamScores.team2} ${formatMatchResultTeam(team2)}`,
    match.winnerTeam.id === team2.id,
  );

  return `${team1WithScore} - ${team2WithScore}\n${eventLink} ${formatMapsScore(match.maps)}`;
};

module.exports = {
  setBoldIf,
  formatMapsScore,
  formatSlug,
  formatTeamRank,
  formatTeam,
  formatEventLink,
  formatMatchResultTeam,
  formatMatchResult,
};
