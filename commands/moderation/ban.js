const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ban",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `Nemáš práva pro použití tohoto commandu!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Označ prosím člena kterého chceš zabanovat!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Zkus prosím označit člena znovu!`);

    if (Member.id === message.author.id)
      return message.channel.send(`Nemůžeš zabanovat sám sebe!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Prosim nebanuj mě ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`Nebanuj majitele, Ty nemůžeš být majitel serveru!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`Nemůžu zabanovat tohoto člena!`);

    try {
      console.log(`Member Is Going To Get Ban!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "Nuveden důvod!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Člen zabanován!`)
        .addField(`Moderátor`, `${message.author.tag} (${message.author.id}`)
        .addField(`Zabanovaný člen`, `${Member.tag} (${Member.id})`)
        .addField(`Důvod`, `${Reason || "Neuveden důvod!"}`)
        .setFooter(`Provedl ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `Jsi zabanován z **${message.guild.name}** For ${Reason ||
            "Neuveden důvod!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Byl zabanován z ${
          message.guild.name
        } For ${Reason || "Neuveden důvod!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `Toho člena nemohu zabanovat, Možná má člen vyšší roli než já a moje role je nižší než člen!`
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
