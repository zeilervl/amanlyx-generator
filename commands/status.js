const discord = require("discord.js");

module.exports = {
    async run(bot, message, args) {
        if(message.author.id !== "679613118866784256") return;
        const activityName = message.content.slice(args[0].length, message.content.length);
        const activityType = args[0].toUpperCase();

        bot.user.setActivity(activityName, {type: activityType}).then(() => console.log("Successfully set activity."));
    },
    aliases: [],
    name: "changestatus",
    description: "Change Bot Status"
};
