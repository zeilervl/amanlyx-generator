const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    // !announcement Titel ${splitser} Bericht ${splitser} Kleur ${splitser} Kanaal

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You Don't Have Permission To Do This**");

    // Met dit gaan we tekst splitsen.
    var splitser = "//";

    // Nakijken als men wel gegevens meegeeft.
    if (args[0] == null) {

        var useMessage = new discord.RichEmbed()
            .setTitle("Usage")
            .setColor("#00ee00")
            .setDescription(`For support, message AMAN#0001 \n !announcement Titel ${splitser} Bericht ${splitser} Kleur ${splitser} Kanaal`);

        return message.channel.send(useMessage);

    }

    // Verkrijg al de args en splits ze met de splitser.
    args = args.join(" ").split(splitser);

    // Nakijken als je channel meegeeft of een kleur. Dit plaatsen we hier om een error te voorkomen bij de trim later.
    if (args[2] == undefined) args[2] = "#eeeeee";
    if (args[3] == undefined) args[3] = "general";

    // Opties die gezet worden als er iets niet wordt meegeven.
    // Voor het kanaal halen we de spaties weg.
    var options = {

        titel: args[0] || "Melding",
        bericht: args[1] || "Geen inhoud opgegeven",
        kleur: args[2].trim(),
        kanaal: args[3].trim()
    }

    // Verkrijgen van wie het bericht aanmaakt.
    var announcer = message.author;

    // Het bericht wat wordt verzonden.
    var announcementMessage = new discord.RichEmbed()
        .setTitle(`${options.titel}`)
        .setURL('https://discord.gg/6Tbsh4z')
        .setColor(`${options.kleur}`)
        .setDescription(` ${options.bericht}`)
        .setFooter("@everyone React now | Announcement AMAN#0001")

    // Kanaal krijgen waar het verzonden moet worden.
    var announceChannel = message.guild.channels.find(`name`, options.kanaal);
    if (!announceChannel) return message.channel.send("Kan het kanaal niet vinden");

    // Zenden van het bericht.
    announceChannel.send(announcementMessage);

}

module.exports.help = {
    name: "ac"
}
