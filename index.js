const Discord = require('discord.js');
const botconfig = require("./botconfig.js");
const bot = new Discord.Client({disableEveryone: true});
const { RichEmbed, Attachment } = require('discord.js');
const { token, ownerID, prefix } = require('./botconfig')
const iEmbed = require('discord.js');
const fs = require("fs");


bot.commands = new Discord.Collection();

  bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  //console.log(bot.commands);
  bot.user.setActivity("with code | bb/help", {type: 'PLAYING'})
  //bot.channels.find(x => x.name === 'logs').send('BB 2.0 Now Online');
  //bot.user.setActivity(`Being used ${bot.guilds.size} differnt servers!`);
  console.log(`BlazerBot has started with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
})

bot.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

bot.on('reconnecting', () => console.log('I am reconnecting now!'));

bot.on('resume', () => console.log('I have reconnected!'));

fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No Commands to Load");
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`)
  
  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    //console.log(`${i + 1}: ${f} loaded`);
    bot.commands.set(props.help.name, props);
    
  })

})

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

   if(!command.startsWith(prefix)) return;

   let cmd = bot.commands.get(command.slice(prefix.length));
   if(cmd) cmd.run(bot, message, args);
})
/*
bot.on("message", async message => {
  if(message.channel.type === "dm") {
    let embed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("Direct Message To The Bot")
      .addField(`Sent By:`,`<@${message.author.id}>`)
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL)
      .addField(`Message: `,message.content)
      .setFooter(`DM Bot Messages | DM Logs`)
      bot.users.get(botconfig.ownerID).send(embed)
  }
})
*/
/*
bot.on("channelCreate", async channel => {
  var logs = channel.guild.channels.find(c => c.name === 'logs');
  if (!logs) return console.log("Can't find logs channel!");
  const cembed = new Discord.RichEmbed()
      .setTitle("Channel Created")
      .setColor("RANDOM")
      .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just created!`)
      .setTimestamp(new Date());
  logs.send(cembed)
});

bot.on("channelDelete", async channel => {
  var logs = channel.guild.channels.find(c => c.name === 'logs');
  if (!logs) return console.log("Can't find logs channel!");
  const cembed = new Discord.RichEmbed()
      .setTitle("Channel Deleted")
      .setColor("RANDOM")
      .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just deleted!`)
      .setTimestamp(new Date())
  logs.send(cembed)
});

bot.on('guildMemberAdd', member => {
  let logChannel = member.guild.channels.find('name', 'entry-log');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Someone Joined! ^-^") 
    .setDescription(member.user.username + " (" + member.user.id + ")")
    .setColor('RANDOM')
    .setFooter("BlazerBot v1.5", member.user.displayAvatarURL)
    .setTimestamp()
    logChannel.send(logEmbed);
  })
  bot.on('guildMemberRemove', member => {
  let logChannel = member.guild.channels.find('name', 'entry-log');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Someone Left! ;-;") 
      .setDescription(member.user.username + " (" + member.user.id + ")")
    .setFooter("BlazerBot v1.5", member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    logChannel.send(logEmbed);
  })    */
//        CODE BELOW CAUSES BOT TO CRASH WITH INDEX ERROR.
/*
  bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
  });

  bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`I have Joined another discord: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
  });
*/

bot.on('message', function(message){
  if(message.content == 'bbHello?')
  {
      message.channel.sendMessage("I'm awake, I swear! [**Test Complete**]");
  }
  else if(message.content == "DMtest")
  {
      message.member.send("This is a Test!");
  }
});

bot.login(token);
