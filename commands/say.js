const discord = require("discord.js");

module.exports = {
    async run(bot, message, args) {
        if(message.author.id !== "679613118866784256") return;
        console.log(args[0] + args[1])
        let mEmbed = new discord.RichEmbed()
            .setDescription(message.content.slice(message.content.indexOf(args[0]), message.content.length))
            .setColor(args[0])
        message.channel.send(mEmbed);
    },
    aliases: [],
    name: "say",
    description: "Send a message."
};
