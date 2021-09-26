const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "coinflip",
  aliases: ["toss", "flip"],
  description: "Hod mincí!",
  usage: "Coinflip",
  run: async (client, message, args) => {
    //Start
    message.delete();
    const coins = ["Pana", "Orlice", "Nic"];

    let result = Math.floor(Math.random() * coins.length);

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Mince Je`)
      .setDescription(coins[result])
      .setFooter(`Mincí hodil ${message.author.username}`)
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