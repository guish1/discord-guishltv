const { HLTV } = require('hltv');

const { getTeam } = require('../hltv/teams');
const { clearCacheTeam } = require('../hltv/teams');
const { createMessageEmbed } = require('../messages/embed');
const { formatMatchResult, formatTeam } = require('../messages/format');

const onCommands = (message) => {
  const embed = createMessageEmbed('Commands');
  embed.addField('g!results', 'Display last 5 world records');
  embed.addField('g!ranking team', 'Display top 30 team ranking');
  message.channel.send({ embed });
};

const onClearCache = () => {
  clearCacheTeam();
};

const onSourceCode = (message) => {
  const embed = createMessageEmbed('Source code');
  embed.addField('GIT', '[https://github.com/guish1/discord-guishltv](https://github.com/guish1/discord-guishltv)');
  message.channel.send({ embed });
};

const onRankingTeams = async (message, args) => {
  const embed = createMessageEmbed('Top #10 Team ranking');
  const country = args[1] || '';
  const teamsRanking = await HLTV.getTeamRanking({country: country});
  const teamRankingWithTeamsInformation = await Promise.all(
    // Get only 10 teams from ranking because of Discord limit of 25 fields for message.
    teamsRanking.slice(0, 10)
      .map(async (teamRanking) => ({
        team: await getTeam({ id: teamRanking.team.id }),
        points: teamRanking.points,
        place: teamRanking.place,
      })),
  );

  let str = "";
  teamRankingWithTeamsInformation.forEach(({ team, points, place }, index) => {
    const { flag, link } = formatTeam(team);
    str += `#${place} - ${flag} ${link} (${points} pts)\n`;
  });
  embed.addField('\u200b', str + '\u200b');

  message.channel.send({ embed });
};

const onRankingPlayers = () => {
  // Todo.
};

const onResults = async (message) => {
  // Get full results.
  const matchResults = await HLTV.getResults({ pages: 1 });
  const embed = createMessageEmbed('Last 5 world records');

  const matchesWithTeams = await Promise.all(matchResults.slice(0, 5).map(async (result) => {
    const [match, team1, team2] = await Promise.all([
      HLTV.getMatch({ id: result.id }),
      getTeam({ id: result.team1.id }),
      getTeam({ id: result.team2.id }),
    ]);
    return {
      match,
      team1,
      team2,
    };
  }));
  matchesWithTeams.forEach(({ match, team1, team2 }, index) => {
    embed.addField('\u200b', formatMatchResult(match, team1, team2) + ((index < 4) ? "" : "\n\u200b"));
  });

  message.channel.send({ embed });
};

module.exports = {
  onCommands,
  onClearCache,
  onSourceCode,
  onRankingTeams,
  onRankingPlayers,
  onResults,
};
