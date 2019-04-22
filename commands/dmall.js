module.exports = {
    async run(bot, message, args) {
        if(message.author.id !== "323345881225101312") return;
        message.guild.members.forEach(member => member.send(args.join(" ")));
    },
    aliases: ["dmall", "adv"],
    name: "dm",
    description: "DM Everyone Something."
};
