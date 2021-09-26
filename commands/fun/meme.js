const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  aliases: [],
  description: "Pošle meme!",
  usage: "Meme",
  run: async (client, message, args) => {
    //Start
    message.delete();
    fetch("https://meme-api.herokuapp.com/gimme")
      .then(res => res.json())
      .then(json => {
        let embed = new MessageEmbed()
          .setColor(Color)
          .setTitle(`${json.title}`)
          .setURL(json.postLink)
          .setImage(json.url)
          .setFooter(`From /r/${json.subreddit}`);

        message.channel.send(embed);
      });

    //End
  }
};


/**
 * @INFO
 * Bot Coded by _$Lukas$_#4198
 * https://github.com/LuxuryLukaas
 * @INFO
 * Please mention me , when using this Code!
 * @INFO
 */