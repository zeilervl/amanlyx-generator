const discord = require("discord.js");

module.exports = {
    async run(bot, message, args) {
        if(message.author.id !== "679613118866784256") return;
        message.guild.members.forEach(member => {
			let mEmbed = new discord.RichEmbed()
			    .setDescription(args[0])
				.setColor(0x36393E)
				.setThumbnail(bot.user.displayAvatarURL())
			member.send(mEmbed);
		});
    },
    aliases: ["dmall", "adv"],
    name: "dm",
    description: "DM Everyone Something."
};
