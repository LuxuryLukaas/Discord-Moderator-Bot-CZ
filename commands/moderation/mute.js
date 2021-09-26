const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mutni člena!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();

        if (!message.member.hasPermission("MANAGE_SERVER"))
      return message.channel.send(
        `Nemáš práva pro použití tohoto commandu!`
      );
    
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Označ prosím člena!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `Prosim udelej roli | Nazev role : Muted`
      );

    if (Member.roles.cache.has(Role)) {
      return message.channel.send(`Člen již je muted!`);
    }

    let Reason = args.slice(1).join(" ");

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Člen Muted!`)
      .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
      .addField(`Muted Člen`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Důvod`, `${Reason || "Neuveden důvod!"}`)
      .setFooter(`Provedl ${message.author.username}`)
      .setTimestamp();

    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Něco je špatně, zkus to znovu!`);
    }

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
