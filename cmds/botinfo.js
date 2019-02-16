const discord = require('discord.js');

exports.run = (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;

var myInfo = new discord.RichEmbed()
.setTitle("__Information About BlazerBot 2.0__")
.addField("About me:", "I was made to help people do many things!")
.addField("Developed By:", "Blazer178")
.addField("Version:", "2.0")
.addField("Join the Official Discord:", "https://discord.gg/sa8RGHk")
.setColor(0x00FFFF)
.setThumbnail(bicon)
.setFooter("Contact @Blazer178#3381 if you experience errors!")

message.channel.sendEmbed(myInfo);

};

exports.help = {
  name: 'info',
  description: 'Info command.',
  usage: 'info'
};
