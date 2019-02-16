const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = (bot, message, args) => {

  if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("You need STAFF permissions for use this command.")
  if (!message.guild) {
  const unBan = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Warning** :warning:', '`unban` **You cannot use this command here! Go to a Discord server.** ')
  return message.author.sendEmbed(unBan); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  bot.unbanReason = reason;
  bot.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'logs');//mod-log channel name. change for you
  if (!modlog) return message.reply('`log` Couldnt find channel!');//don't find mod-log channel.
  if (!user) return message.reply('**Must specify user!**').catch(console.error);
  message.guild.unban(user);
  if (reason.length < 1) return message.reply('**Please specify a reason for the unban!**');//don't forget unban reason

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Action:', 'Ban Removal')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Authorized By:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason:', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.help = {
  name: 'unban',
  description: 'ban command.',
  usage: 'unban [user] [reason]'
};