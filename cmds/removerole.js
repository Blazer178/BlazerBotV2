// Remove Role

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("❌ I'm sorry. You don't have the right permissions to do this command.");
    if (args[0] == "help") {
        message.reply("Use: bb/removerole <user> <role>");
        return;
    }
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("I can't find that user.");
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Specify a role.");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("I can't find that role. Spell it right? :thinking: ");

    if (!rMember.roles.has(gRole.id)) return message.reply("❌ They don't have that role.");
    await (rMember.removeRole(gRole.id));

    try {
        await rMember.send(`Oh no! You've lost the role: ${gRole.name}`)
    } catch (e) {
        message.channel.send(`RIP to <@${rMember.id}>, they have had the role ${gRole.name} taken away from them. We tried to DM them, but their DMs are locked.`)
    }
}

module.exports.help = {
    name: "removerole"
}