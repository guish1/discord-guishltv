const { keyBy } = require('lodash');

const TEAMS_RANKINGS = [

];

const TEAMS_RANKINGS_MAP = keyBy(TEAMS_RANKINGS);

module.exports = {
  TEAMS_RANKINGS,
  TEAMS_RANKINGS_MAP,
};
