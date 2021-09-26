const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "randomnumber",
  aliases: ["rn"],
  category: "fun",
  description: "Dostaneš Random Number!",
  usage: "Randomnumber",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let result = Math.floor(Math.random() * 101);

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Random Číslo Je`)
      .setDescription([result])
      .setFooter(`1 - 100`)
      .setTimestamp();

    message.channel.send(embed);

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