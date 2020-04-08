const discord = require("discord.js");

module.exports = {
    async run(bot, message, args) {
        if(message.author.id !== "679613118866784256") return;
        const activityName = message.content.slice(message.content.indexOf(args[0]), message.content.length).split(" ")[1];
        const activityType = args[0].toUpperCase();
        if(activityType === "STREAMING") activityType = 1

        bot.user.setActivity(activityName, {type: activityType}).then(() => console.log("Successfully set activity."));
    },
    aliases: [],
    name: "changestatus",
    description: "Change Bot Status"
};
