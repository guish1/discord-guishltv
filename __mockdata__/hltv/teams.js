const { keyBy } = require('lodash');

const TEAMS = [

];

const TEAMS_MAP = keyBy(TEAMS);

module.exports = {
  TEAMS,
  TEAMS_MAP,
};
