const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTk4OTE4MjY3MjAwOTk1MzM5.XSdo1Q.MTk9WPi1tSCZisnw-RpqhuG-ZMs');
