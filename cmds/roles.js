const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermissions ('ADMINISTRATOR')) return message.channel.send("You need STAFF permissions for use this command.")
  let prefix = botconfig.prefix;
  if (!message.content.startsWith(prefix)) return;



    let serverembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("Server Roles",` ${message.guild.roles.size} Roles  \n Names : ${message.guild.roles.array()}`,true)
    .setTimestamp()
    .setFooter(`${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"roles"
}