  const discord = require("discord.js");  
  module.exports = {
        async run(bot, message, args) {
            if(message.author.id !== "679613118866784256") return;
            const members = message.guild.members.array();
            
            for(let i = 0, len = members.length; i < len; i++) {
                let mEmbed = new discord.RichEmbed()
                .setDescription(args[0])
                .setColor(0x33fff9)
                
                members[i].send(mEmbed);
            }
        },
        aliases: ["dmall", "adv"],
        name: "dm",
        description: "DM Everyone Something."
    };
