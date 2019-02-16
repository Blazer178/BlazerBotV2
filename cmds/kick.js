const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("You need STAFF permissions for use this command.")
    var member = message.mentions.members.first();
    member.kick().then((member) => {
        message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
    }).catch(() => {
        message.channel.send("Access Denied");
    })

};

exports.help = {
  name: 'kick',
  description: 'kick command.',
  usage: 'kick [user] [reason]'
};
