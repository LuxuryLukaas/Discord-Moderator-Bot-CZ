const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "rate",
  aliases: [],
  description: "Bot ohodnotil zadanou věc!",
  usage: "Rate <Text>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Napiš prosím nšco k hodnocení!`);

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(`Já hodnotím`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 Pro ${Content}`)
      .setFooter(`Provedl ${message.author.username}`)
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