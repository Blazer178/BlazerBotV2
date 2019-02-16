const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("BlazerBOT Prefix", "bb/[command]")
        .addField("Moderation", `**Ban :** It will __ban__ any user as long the bot has a higher role\n<bb/ban> <user> <reason>\n
        **Unban :** It will __unban__ any user that's banned.\n<bb/unban> <user> <reason>\n
        **Kick :** It will __kick__ any user as long the bot has a higher role\n<bb/kick> <user> <reason>\n
        **Mute :** it will __mute__ an user until they are un-muted.\n<bb/mute> <user> <reason>\n
        **Unmute :** it will __unmute__ a user that is currently muted.\n<bb/unmute> <user> <reason>\n`)
        .addField("-", `**Announce [WIP]:** It will say anything you want in a channel, have in mind this is only for Admins\n<bb/announce> <what you want to say>\n
        **Purge :** it will clear up to 100 messages no older than 14 days\n<bb/purge> <amount of messages>\n
        **Lockdown :** it will lockdown any channel as long as the bot has the proper permissions\n<bb/lockdown hh-mm-ss> (choose one. Ex: bb/lockdown 1h)\n if you wish to unlock the channel before the cooldown is done you could do **<bb/><lockdown release or unlock>**\n
        **Roles :** List all the roles in the discord.\n<bb/roles>
        **User Info :** Look at the specified users info!\n<bb/userinfo> <user>`)
        .addBlankField()
        .addField("General", `**Help :** This is how you got here!\n
        **Bot Info :** It wil show my info page!\n<bb/info>\n
        **Uptime :** Check how long the bot has been online!\n<bb/uptime>\n
        **Report :** Report someone to the staff!\n<bb/report> <user> <reason>\n
        **Google [WIP]:** Let me google that for you. :nerd: \n<bb/search> <something>\n
        **Image Search :** Displays a google image search. \n<bb/imgsearch> <something>\n`)
        .addBlankField()
        .addField("Fun", `**cat :** It wil show you a cute kitty cat!\n<bb/cat>\n
        **Doggo :** It will show you a cute doggo!\n<bb/doggo>\n
        **Flip :** Flip a coin! Heads or Tails?\n<bb/flip>\n
        **Hug :** Hug someone.\n<bb/hug> <user>\n
        **Kiss :** Kiss someone. :kiss: \n<bb/kiss> <user>\n
        **Pat :** Pat someone on the head.\n<bb/pat> <user>\n`)
        .addField("-", `**Roll :** Roll a dice!\n(6 sided dice by default unless a number is specified)\n<bb/roll> <number>\n
        **Slap :** Slap someone. :raised_back_of_hand: \n<bb/slap> <user>\n
        **Smoke :** Hold on, let me get a cig :smoking: \n<bb/smoke>\n
        **Gif :** DM's a Gif of your choosing.\n<bb/gif> <something>\n
        **Meme :** I'll send a random meme.\n<bb/meme>\n
        **Slot Machine :** Play some slots.\n<bb/slots>\n
        **Candy :** Give someone some Candy! :candy:`)
        .addBlankField()
        .addField("Music", `**THE MUSIC PLAYER IS CURRENTLY IN BETA, LOOKOUT FOR BUGS**\n
        **Play :** play from a __**YouTube**__ URL.\n<bb/play> <URL>\n
        **Stop :** Stop the music player.\n<bb/stop>`)
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RANDOM');
        //message.channel.send(botembed);


try {
    await message.author.send(botembed);
    message.channel.send(`I sent you a DM, <@${message.author.id}>!`);
} catch (e) {
    throw e;
}
}

module.exports.help = {
    name: "help"
}
