const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Ukáže Informace o Serveru!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
    message.delete();
    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "Žádné emoji!";
    const Roles = guild.roles.cache.size || "Žádné role!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new MessageEmbed()
      .setTitle(guild.name + " Informace!")
      .setColor(Color)
      .setThumbnail(guild.iconURL())
      .addField(`Jméno`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Vlastník`, `${guild.owner.user.tag}`, true)
      .addField(`Počet rolí`, Roles, true)
      .addField(`Počet Emoji`, Emojis, true)
      .addField(`Počet členů`, Members, true)
      .addField(`Počet lidí`, Humans, true)
      .addField(`Počet botů`, Bots, true)
      .addField(`Vytvoření serveru`, guild.createdAt.toDateString())
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