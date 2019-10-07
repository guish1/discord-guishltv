const { getClient: getDiscordClient } = require('./bootstrap/discord');

const {
  onCommands,
  onClearCache,
  onSourceCode,
  onRankingTeams,
  onRankingPlayers,
  onResults,
} = require('./services/bot/commands');

// Client
const client = getDiscordClient();

client.on('ready', () => {
  client.user.setActivity('!commands me');
});

client.on('message', async (message) => {
  // Get arguments as !command arg
  // First arg is main command, all others are args
  const [command, ...args] = message.content.split(' ');

  switch (command) {
    case '!restart':
      return true;
      
    case '!clearcache':
      return onClearCache();
      
    case '!commands':
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
      return onResults(message);

    default:
      return null;
  }
});

client.login(process.env.BOT_TOKEN);
