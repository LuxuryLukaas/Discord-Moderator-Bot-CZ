const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "clear",
  aliases: ["purge", "clearmsgs"],
  description: "Vymže zprávy!",
  usage: "Clear <Message Amount>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "Nemáš práva pro použití tohoto commandu!!"
      );

    if (!args[0])
      return message.channel.send(`Zadej prosím počet zpráv!`);

    if (isNaN(args[0]))
      return message.channel.send(`Zadej prosím platnou hodnotu!`);

    if (args[0] < 4)
      return message.channel.send(
        `You Can Delete ${args[0]} By Your Self Its Not Too Many Messages!`
      );

    if (args[0] > 100)
      return message.channel.send(
        `Nemůžu ${args[0]} kvůli omezení discordu!`
      );

    let Reason = args.slice(1).join(" ") || "Neuveden důvod!";

    message.channel.bulkDelete(args[0]).then(Message => {
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Zprávy smazány!`)
        .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
        .addField(`Channel`, `${message.channel.name} (${message.channel.id}`)
        .addField(`Odstraněné zprávy`, `${Message.size}`)
        .addField(`Důvod`, `${Reason}`)
        .setFooter(`Provedl ${message.author.username}`)
        .setTimestamp();
      return message.channel
        .send(embed)
        .then(msg => msg.delete({ timeout: 10000 }));
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