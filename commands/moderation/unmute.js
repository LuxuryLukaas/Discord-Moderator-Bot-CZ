const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unmute",
  aliases: [],
  description: "Odmutni člena!",
  usage: "Unmute <Mention User>",
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

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `Není zde muted role nebo člen není muted!`
      );

    if (!Member.roles.cache.has(Role)) {
      return message.channel.send(`Člen již je unmuted!`);
    }

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Člen Unmuted!`)
      .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
      .addField(`Unmuted Člen`, `${Member.user.tag} (${Member.user.id})`)
      .setFooter(`Provedl ${message.author.username}`)
      .setTimestamp();

    if (Role && Member.roles.cache.has(Role)) {
      Member.roles.remove([Role]);
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
