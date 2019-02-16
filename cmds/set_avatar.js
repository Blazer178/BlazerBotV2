const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let messageArray = message.content.split(" ");
    let command = messageArray[0]
    if(!command.startsWith(botconfig.prefix)) return;
    //const args = messageArray.slice(1);
    //let botmessage = args.join(" ");
    if(message.author.id !== '139213278571134977') return message.reply("Only My Owner Can Change My Photo");
    
    let image = message.attachments.first().url;


    bot.user.setAvatar(image);

    let iEmbed = new Discord.RichEmbed()
        .setAuthor('✅ Photo altered successfully')
        .setColor('RANDOM')
        .addField("Thanks Nathan!!", "BlazerBot v2.0")
    message.channel.send(iEmbed)
}

module.exports.help = {
    name: "setavatar"
}