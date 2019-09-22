const { getClient: getDiscordClient } = require('./bootstrap/discord');

const {
  onCommands,
  onSourceCode,
  onRankingTeams,
  onRankingPlayers,
  onResults,
} = require('./services/bot/commands');

// Client
const client = getDiscordClient();

/*
ToDo:
- fix slow requests from await/async/promise (for !results & !ranking)
- need global function to prevent duplicated code for each call :
    * get team name
    * formatted name
    * get team rank
*/

client.on('ready', () => {
  // Todo not sure what this does.
  client.user.setActivity('!commands me');
});

client.on('message', async (message) => {
  // Get arguments as !command arg
  // First arg is main command, all others are args
  const [command, ...args] = message.content.split(' ');

  switch (command) {
    case '!commands':
    case '!start':
      return onCommands(message);

    case '!sourcecode':
      return onSourceCode(message);

    case '!ranking': {
      if (args[0] === 'team') {
        return onRankingTeams(message);
      } if (args[0] === 'player') {
        return onRankingPlayers(message);
      }
      return null;
    }

    case '!results':
      // If !results.
      return onResults(message);

    default:
      return null;
  }
});

client.login(process.env.BOT_TOKEN);
