// Requirements
const Discord = require('discord.js');
const { HLTV } = require('hltv');
const _ = require('lodash');
// Countries name: code
const countries = require('../resources/countries.json');
// Client
const client = new Discord.Client();

/*
ToDo:
- fix slow requests from await/async/promise (for !results & !ranking)
- need global function to prevent duplicated code for each call :
    * get team name
    * formatted name
    * get team rank
*/

// Default embed creation.
const createEmbed = (title) => new Discord.MessageEmbed()
  .setColor(0x00AE86)
  .setTitle(' ')
  .setAuthor(`GUISHLTV - ${title}`, 'https://i.imgur.com/G34L4R7.png', 'https://www.avisdetemplate.fr')
  .setFooter('© Powered by GUISH 2019 - Unofficial HLTV Bot')
  .setTimestamp();

// Get team information from its ID.
const getTeam = (teamId) => HLTV.getTeam({ id: teamId });

// Get match information from its ID.
const getMatch = (matchId) => HLTV.getMatch({ id: matchId });

// // Truncate string if needed to prevent line breaking
// const truncateString = (string, maxLength) => (
//   string.length <= maxLength
//     ? string
//     : `${string.slice(0, maxLength)}...`
// );

client.on('ready', () => {
  // Todo not sure what this does.
  client.user.setActivity('!commands me');
});

client.on('message', async (message) => {
  if (message.content[0] !== '!') {
    return;
  }

  // Get arguments as !command arg
  // First arg is main command, all others are args
  const [command, ...args] = message.content.substring(1).split(' ');

  switch (command) {
    case 'commands':
    case 'start': {
      const embed = createEmbed('Commands');
      embed.addField('!results', 'Display last 5 world records');
      embed.addField('!ranking team', 'Display top 30 team ranking');
      message.channel.send({ embed });
      break;
    }

    case 'sourcecode': {
      const embed = createEmbed('Source code');
      embed.addField('GIT', '[https://github.com/guish1/discord-guishltv](https://github.com/guish1/discord-guishltv)');
      message.channel.send({ embed });
      break;
    }

    case 'ranking': {
      if (args[0] === 'team') {
        // If !ranking team

        // Todo refactor this to get ranking and directly associate their teams
        // instead of using the same index in teams.forEach.

        // Get full ranking (default : 30)
        const res = await HLTV.getTeamRanking();
        const embed = createEmbed('Top 21 Team ranking');
        // Get only 21 teams from ranking because of awesome Discord limit of 25 fields for message.
        const teams = await Promise.all(_.times(21).map((i) => getTeam(res[i].team.id)));

        teams.forEach((team, index) => {
          // Get team flag from country
          const flag = (typeof countries[team.location] !== 'undefined')
            // Todo refactor this in a function to return the flag to prevent code duplication.
            // Maybe `\\:flag...`.
            // eslint-disable-next-line no-useless-escape
            ? `\:flag_${countries[team.location]}: `
            : '';

          // Get team name, format one for external URL.
          // Todo maybe use a lib to create the slug ?
          const teamNameFormatted = (team.name).replace(/\s+/g, '-').toLowerCase();

          // Final display.
          const teamFront = `[${team.name}](https://www.hltv.org/team/${team.id}/${teamNameFormatted} 'id: ${team.id}')`;

          embed.addField(`#${index + 1}`, `${flag}${teamFront} (${res[index].points} pts)\n\u200b`, true);
        });

        embed.addBlankField(false);
        message.channel.send({ embed });
      } else if (args[0] === 'player') {
        // Todo !results player
      }
      break;
    }

    case 'results': {
      // If !results.
      // Get full results.
      const res = await HLTV.getResults({ pages: 1 });
      const embed = createEmbed('Last 5 world records');

      // Todo refactor this with Promise.all for performance.

      // Limit results to 5 records
      for (let i = 0; i < 5; i++) {
        // Get teams informations needed for flag and rank.

        // Todo remove this comment when no longer using a loop.
        // eslint-disable-next-line no-await-in-loop
        const [team1, team2] = await Promise.all([
          getTeam(res[i].team1.id),
          getTeam(res[i].team2.id),
        ]);

        // Get scores from each map
        // Todo remove this comment when no longer using a loop.
        // eslint-disable-next-line no-await-in-loop
        const score = await getMatch(res[i].id);
        let mapsScore = '';
        let count = 0;

        // Todo refactor this with score.maps.map.
        for (let j = 0; j < (score.maps).length; j++) {
          const r = (score.maps[j].result).split(' (');
          if (count !== (score.maps).length && r[0] !== '' && j !== 0) mapsScore += ' / ';
          mapsScore += r[0];
          if (mapsScore === '') mapsScore += '1 map from WB';
          count += 1;
        }
        if (mapsScore === '') mapsScore = 'N/A';

        // Get team flag from country
        const flag1 = (typeof countries[team1.location] !== 'undefined')
        // Maybe `\\:flag...`.
        // eslint-disable-next-line no-useless-escape
          ? `\:flag_${countries[team1.location]}: `
          : '';
        const flag2 = (typeof countries[team2.location] !== 'undefined')
        // Maybe `\\:flag...`.
        // eslint-disable-next-line no-useless-escape
          ? `\:flag_${countries[team2.location]}: `
          : '';

        // Todo refactor res[i].team1 by team1 maybe ?
        // Get team name, format one for external URL
        const team1NameFormatted = (res[i].team1.name).replace(/\s+/g, '-').toLowerCase();
        const team2NameFormatted = (res[i].team2.name).replace(/\s+/g, '-').toLowerCase();
        const team1Name = `[${res[i].team1.name}](https://www.hltv.org/team/${res[i].team1.id}/${team1NameFormatted} 'id: ${res[i].team1.id}')`;
        const team2Name = `[${res[i].team2.name}](https://www.hltv.org/team/${res[i].team2.id}/${team2NameFormatted} 'id: ${res[i].team2.id}')`;
        // Get team rank
        const team1Rank = (typeof team1.rank !== 'undefined') ? `(#${team1.rank}) ` : '';
        const team2Rank = (typeof team2.rank !== 'undefined') ? `(#${team2.rank})` : '';
        // Get final score
        const scores = (res[i].result).split(' - ');
        const team1Score = parseInt(scores[0], 10);
        const team2Score = parseInt(scores[1], 10);
        // Set front display with formatted team informations
        // as [FLAG + NAME + RANK + SCORE] - [SCORE + FLAG + NAME + RANK]
        const team1Front = `${flag1 + team1Name} ${team1Rank}${team1Score}`;
        const team2Front = `${team2Score} ${flag2}${team2Name} ${team2Rank}`;
        // Set bold text for winner
        const team1State = (team1Score > team2Score) ? `**${team1Front}**` : team1Front;
        const team2State = (team1Score < team2Score) ? `**${team2Front}**` : team2Front;
        // Get format event name
        const eventNameFormatted = (res[i].event.name).replace(/\s+/g, '-').toLowerCase();

        embed.addField('\u200b', `${team1State} - ${team2State}\n[${res[i].event.name}](https://www.hltv.org/events/${res[i].event.id}/${eventNameFormatted} 'id: ${res[i].event.id}') - ${mapsScore}`);
      }
      embed.addBlankField(true);
      message.channel.send({ embed });
      break;
    }
    default:
      break;
  }
});

client.login(process.env.BOT_TOKEN);
