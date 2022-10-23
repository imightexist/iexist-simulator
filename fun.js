let token = "";


let discord = require('discord.js');
let client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});
client.login(token);
client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  random = Math.floor(Math.random() * 3)
  if (message.content == "can you advertise github page for this repo uwu"){
    message.reply("https://github.com/imightexist/iexist-simulator")
  }else{
    if (random == 0){
     message.reply("yee")
    }else if (random == 1){
      message.reply("nice")
    }else{
      message.reply("bruh")
    }
  }
});
