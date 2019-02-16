const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`:gay_pride_flag: **I think ${message.mentions.members.first().user.username} is ${gay}% gay!** :gay_pride_flag:`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
};
