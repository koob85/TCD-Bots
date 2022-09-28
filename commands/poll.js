Modules = require('../moduleManager.js')
const Discord = require("discord.js");

var Question = "What type of car would you like to see in RoCitizens next?"
var Options = {
	Classic: "🕰️",
	Muscle: "💪",
	Luxury: "💰",
	Sport: "😎",
	"Off-Roader": "🌲",
	Electric: "⚡",
	Minivan: "🚙",
	Truck: "🚚",
}

module.exports = {
	name: 'poll',
	description: "Sends a message",
	execute(message, args) {
		if (Modules.Util.userIsManager(message.member)){
			var Desc = ""
			pollEmbed = new Discord.EmbedBuilder()
				.setTitle("**Q:** " + Question)
				.setColor('#ebb734')
				.setFooter({ text: "React with the matching emoji to vote" })
			for (const [Key, Val] of Object.entries(Options)) {
				Desc = (Desc + "\n" + Val + " " + Key)
			}
			pollEmbed.setDescription(Desc)
			message.channel.send({ embeds: [pollEmbed] })
				.then(function (newMessage) {
					for (const [Key, Val] of Object.entries(Options)) {
						newMessage.react(Val)
					}
					if (args[1] == "ping") {
						message.channel.send("<@&700158172647915530> There's a new poll!")
					};
					Modules.Util.deleteMessage(message)
				});

		}
	}
}