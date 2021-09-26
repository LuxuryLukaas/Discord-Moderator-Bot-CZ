const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "hack",
  aliases: [],
  description: "Hack Member!",
  usage: "Hack <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Označ prosím člena kterého chceš hacknout!`
      );

    if (Member.user.id === message.author.id)
      return message.channel.send(`Nemůžeš hacknout sám sebe!`);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hacknutí bylo Dokončeno`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
      .setFooter(`Jedná se pouze o srandu, neberte to vážne :) !`)
      .setTimestamp();

    await message.channel.send(`Hackování Začalo! Hackuji ${Member.user.username}`);

    await message.channel.send(`Hackování: 10%`);

    await message.channel.send(`Hackování: 20%`);

    await message.channel.send(`Hackování: 30%`);

    await message.channel.send(`Hackování: 40%`);

    await message.channel.send(`Hackování: 50%`);

    await message.channel.send(`Hackování: 60%`);

    await message.channel.send(`Hackování: 70%`);

    await message.channel.send(`Hackování: 80%`);

    await message.channel.send(`Hackování: 90%`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

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