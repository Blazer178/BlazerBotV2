//pat 
const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {

    var images = ["https://i.imgur.com/2lacG7l.gif", "https://i.imgur.com/UWbKpx8.gif", "https://i.imgur.com/LUypjw3.gif", "https://i.pinimg.com/originals/c0/3f/58/c03f5817acde4b1c168d31ffe02c522e.gif", "https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853", "https://pa1.narvii.com/6401/9629e80dbe24f32a009ac51ee633a32dfbe1773f_hq.gif", "https://media1.tenor.com/images/2b2f9c5d046ea2cdaca41dfdc4356eea/tenor.gif?itemid=7552114", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> patted <@${message.author.id}>.. Oh wait! You can't pat yourself!`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> patted ${args[0]}`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "pat"
}