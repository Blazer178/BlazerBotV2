const encode = require('strict-uri-encode');
 
exports.run = (bot, message, args, tools) => {
 

  let question = encode(args.join(' '));
 
  let link = `https://www.google.com/search?biw=1920&bih=963&tbm=isch&sa=1&ei=9jNYXPeVH4W7jwSCjJ6IAw&q=${question}`;

  // Output to chat
  message.channel.send(`**<${link}>**`);
 
}

  exports.help = {
    name: "imgsearch",
    category: "help",
    description: "Image Search Command",
    usage: "imgsearch"
};