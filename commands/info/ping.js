const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ping",
  aliases: [],
  description: "Ping!",
  usage: "Ping",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`Ping - ${client.ws.ping}`)
      .setFooter(`Requested By ${message.author.username}`)
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
