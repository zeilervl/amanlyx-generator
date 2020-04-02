module.exports = {
    async run(bot, message, args) {
        if(message.author.id !== "679613118866784256") return;
        message.guild.members.forEach(member => member.send(args.join(" ")));
    },
    aliases: ["dmall", "adv"],
    name: "dm",
    description: "DM Everyone Something."
};
