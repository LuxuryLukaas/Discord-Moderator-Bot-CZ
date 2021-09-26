const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "warn",
  aliases: [],
  description: "Varus Člena!",
  usage: "Warn <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();

        if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `Nemáš práva na použití tohoto commandu!`
      );
    
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Označ prosím člena!`);

    let Reason = args.slice(1).join(" ");

    client.db.add(`Warnings_${message.guild.id}_${Member.user.id}`, 1);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Člen varován!`)
      .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
      .addField(`Varovaný člen`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Počet warnů`, Warnings)
      .addField(`Důvod`, `${Reason || "Neuveden důvod!"}`)
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
