const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = (bot, message, args) => {
        let rUser = message.mentions.members.first();
        if(!rUser) return message.channel.send("Could'nt find specified user.");
        let rreason = message.content.split(' ').slice(2).join(' ');

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#15f153")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", rreason);


        let reportschannel = message.guild.channels.find(channel => channel.name === "tickets");
        if(!reportschannel) return message.channel.send("Couldn't find a tickets channel!");

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);

    };

    exports.help = {
      name: 'report',
      description: 'report command.',
      usage: 'report [user] [reason]'
    };
    