const { HLTV } = require('hltv');
const moment = require('moment');

const teamsCache = {};

const getTeam = async ({ id }) => {
  const { team, date } = teamsCache[id] || {};

  if (!team || moment().diff(date, 'days') >= 7) {
    teamsCache[id] = {
      team: await HLTV.getTeam({ id }),
      date: moment().toISOString(),
    };
  }

  return teamsCache[id].team;
};

const clearCacheTeam = () => {
  teamsCache = {};
}

module.exports = {
  getTeam,
  clearCacheTeam,
};
