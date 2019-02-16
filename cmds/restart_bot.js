const Discord = require('discord.js')
const config = require("../botconfig.json");

exports.run = (bot, message, args, tools) => {
if (!message.member.hasPermissions ('ADMINISTRATOR')) return message.channel.send("You need STAFF permissions for use this command.")
resetBot(message.channel);
function resetBot(channel) {
    message.react('✅')
        bot.destroy()
        bot.login(config.token);
  bot.user.setActivity("with code | bb/help", {type: 'PLAYING'})
        message.channel.send("Thanks For The Restart :smile: :star2:");
}
}

exports.help = {
    name: "restart",
    category: "help",
    description: "Restart Command",
    usage: "restart"
};