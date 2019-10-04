const Discord = require('discord.js');

// Default embed creation.
module.exports.createMessageEmbed = (title) => new Discord.MessageEmbed()
  .setColor(0x00AE86)
  .setTitle(' ')
  .setAuthor(`GUISHLTV - ${title}`, 'https://i.imgur.com/G34L4R7.png', 'https://www.avisdetemplate.fr')
  .setFooter('© Powered by GUISH 2019 - Unofficial HLTV Bot')
  .setTimestamp();
