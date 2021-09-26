const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "kick",
  aliases: [],
  description: "Kickni člena",
  usage: "Kick <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        `Nemáš práva pro použití tohoto commandu!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Označ prosím člena kterého chceš kicknout!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Zkus prosím označit člena znovu!`);

    if (Member.id === message.author.id)
      return message.channel.send(`Nemůžeš kicknout sám sebe!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Prosím nekickuj mě ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`Nekickuj majitele, Ty nemůžeš být majitel serveru!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.kickable)
      return message.channel.send(`Nemůžu kicknout tohoto člena!`);

    try {
      console.log(`Member Is Going To Get Kick!`);

      setTimeout(function() {
        User.kick({ reason: `${Reason || "Neuveden důvod!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Člen kicknut!`)
        .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
        .addField(`Kicknutý člen`, `${Member.tag} (${Member.id})`)
        .addField(`Důvod`, `${Reason || "Neuveden důvod!"}`)
        .setFooter(`Provedl ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `Byl jsi kicknuty z **${message.guild.name}** For ${Reason ||
            "Neuveden důvod!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Just Got Kicked From ${
          message.guild.name
        } For ${Reason || "Neuveden důvod!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `Toho člena nemohu kicknout, Možná má člen vyšší roli než já a moje role je nižší než člen!`
        )
        .then(() => console.log(error));
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
