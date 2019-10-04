const { TEAMS_MAP } = require('../../__mockdata__/hltv/teams');
const { MATCHES_MAP } = require('../../__mockdata__/hltv/matches');
const { RESULTS } = require('../../__mockdata__/hltv/results');
const { TEAM_RANKINGS } = require('../../__mockdata__/hltv/teamRankings');

module.exports.HLTV = {
  getTeam({ id }) {
    return Promise.resolve(TEAMS_MAP[id]);
  },

  getMatch({ id }) {
    return Promise.resolve(MATCHES_MAP[id]);
  },

  getResults() {
    return Promise.resolve(RESULTS);
  },

  getTeamRanking() {
    return Promise.resolve(TEAM_RANKINGS);
  },
};
