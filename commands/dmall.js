  const discord = require("discord.js");  
  module.exports = {
        async run(bot, message, args) {
            if(message.author.id !== "679613118866784256") return;
            const members = message.guild.members.array();
            
            for(let i = 0, len = members.length; i < len; i++) {
                let mEmbed = new discord.RichEmbed()
                .setDescription(message.content.slice(message.content.indexOf(args[0]), message.content.length))
                .setColor(0x36393E)
                
                members[i].send(mEmbed);
            }
        },
        aliases: ["dmall", "adv"],
        name: "dm",
        description: "DM Everyone Something."
    };
