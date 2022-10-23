let token = "";


let discord = require('discord.js');
let client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});
client.login(token);
client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  random = Math.floor(Math.random() * 3)
  if (random == 0){
    message.reply("yee")
  }else if (random == 1){
    message.reply("nice")
  }else{
    message.reply("bruh")
  }
});
