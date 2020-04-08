const discord = require("discord.js");

module.exports = {
    async run(bot, message, args) {
        if(message.author.id !== "679613118866784256") return;
        const obj = {
            activity: {
                type: args[0].toUpperCase(),
                name: message.content.slice(args[0].length, message.content.length)
            }
        };

        bot.user.setPresence(obj);
    },
    aliases: [],
    name: "changestatus",
    description: "Change Bot Status"
};
