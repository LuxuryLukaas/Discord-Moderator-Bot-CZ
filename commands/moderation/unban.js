const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unban",
  aliases: [],
  description: "Odbanuj člena!",
  usage: "Unban <Member ID>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `Nemáš práva na použití tohoto commandu!`
      );

    if (!args[0])
      return message.channel.send(
        `Napiš prosim ID člena kterého chceš odbanovat!`
      );

    if (isNaN(args[0])) return message.channel.send(`Napiš prosím platné ID!`);

    if (args[0] === message.author.id)
      return message.channel.send(`Jsi momentálně odbanován!`);

    if (args[0] === message.guild.owner.user.id)
      return message.channel.send(`Majitel serveru je odbanován!`);

    if (args[0] === client.user.id)
      return message.channel.send(`Člen již má unban!`);

    let FetchBan = await message.guild.fetchBans();

    let Member;
    Member =
      FetchBan.find(
        b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      FetchBan.get(args[0]) ||
      FetchBan.find(
        bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase()
      );

    if (!Member)
      return message.channel.send(
        "Napiš prosím platné ID nebo člen nebyl zabanován!"
      );

    let Reason = args.slice(1).join(" ") || "Neuveden důvod!";

    try {
      message.guild.members.unban(Member.user.id, Reason);
    } catch (error) {
      return message.channel.send(
        `Nemůžu odbanovat tohoto člena, nebyl zabanován nebo je někde chyba!`
      );
    }

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Odbanovaný člen!`)
      .addField(`Moderátor`, `${message.author.tag} (${message.author.id}}`)
      .addField(`Odbanovaný člen`, `${Member.user.tag} (${Member.user.id}`)
      .addField(`Důvod`, `${Reason || "Důvod!"}`)
      .setFooter(`Provedl ${message.author.username}`)
      .setTimestamp();

    return message.channel.send(embed);

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