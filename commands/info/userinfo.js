const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "userinfo",
  aliases: ["memberinfo", "whois"],
  description: "Ukáže informace o členocvi!",
  usage: "Userinfo | <Mention User>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let member = message.mentions.users.first() || message.member;

    const statuses = {
      online: "Online",
      dnd: "Nerušit",
      idle: "Nečinný",
      offline: "Offline/Neviditelný"
    };

    const embed = new MessageEmbed()
      .setTitle(member.user.username + " Informace!")
      .setColor(Color)
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Jméno", member.user.tag, true)
      .addField("ID", `${member.id}`, true)
      .addField("Status", statuses[member.presence.status], true)
      .addField(
        `Počet rolí`,
        message.guild.members.cache.get(member.user.id).roles.cache.size ||
          "Nemá role!",
        true
      )
      .addField(`Odkaz na profilovku`, `[Link](${member.user.displayAvatarURL()})`, true)
      .addField("Připojení se na server", member.joinedAt.toDateString())
      .addField("Zaregistrování na Discord", member.user.createdAt.toDateString())
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