const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let diceRoll;
    if(args == "")
    {
        diceRoll = Math.floor(Math.random() * 6) + 1;
        message.reply("Your dice landed on " + diceRoll);  
    }
    else
    {
        diceRoll = Math.floor(Math.random() * args) + 1;
        if(isNaN(diceRoll))
        {
            message.reply(args + " is not a number!");
            diceRoll = Math.floor(Math.random() * 6) + 1;
            message.reply("Your dice landed on " + diceRoll);  
        }
        else
        {
            message.reply("Your dice landed on " + diceRoll);
        }

    }

}

module.exports.help = {
    name: "rolldice"
}