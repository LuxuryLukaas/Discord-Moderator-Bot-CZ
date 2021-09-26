const Discord = require("discord.js");
const weather = require("weather-js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "weather",
  aliases: [],
  description: "Počasí v dané lokaci!",
  usage: "Weather <Location>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    if (!args[0]) return message.channel.send("Napiš mi prosím lokaci!");

    weather.find({ search: args.join(" ") }, function(error, result) {
      if (error) return message.channel.send(`Něco je špatně, zkus to později!`);

      if (result === undefined || result.length === 0)
        return message.channel.send(
          `Neplatná lokace, dej mi prosím platnou lokaci!`
        );

      var current = result[0].current;
      var location = result[0].location;

      const Weather = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`${location.name} Weather!`)
        .setDescription(`${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .addField("Typ hodnoty", location.degreetype, true)
        .addField("Teplota", `${current.temperature}°`, true)
        .addField("Vlhkost", `${current.humidity}%`, true)
        .addField("Vítr", current.winddisplay, true)
        .addField("Pocitová Teplota", `${current.feelslike}°`, true)
        .addField("Časová zona", `UTC${location.timezone}`, true)
        .setTimestamp();

      message.channel.send(Weather);
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
