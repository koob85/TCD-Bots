Modules = require('../moduleManager.js')
Embeds = Modules.Embeds

module.exports = {
	name: 'contestmessage',
	description: "Sends a message",
	execute(message, args) {
		if (Modules.Util.userIsManager(message.member)) {
			if (args[1] == "house") {
				message.channel.send(Embeds.contestEmbed1);
				message.channel.send(Embeds.contestEmbed2);
				message.channel.send(Embeds.contestEmbed3);
			} else if (args[1] == "art") {
				message.channel.send(Embeds.contestEmbed4);
				message.channel.send(Embeds.contestEmbed5);
				message.channel.send(Embeds.contestEmbed6);
			} else if (args[1] == "outdoor") {
        message.channel.send({ embeds: [Embeds.contestEmbed7] });
        message.channel.send({ embeds: [Embeds.contestEmbed8] });
        message.channel.send({ embeds: [Embeds.contestEmbed9] }).then(newMessage => {
					newMessage.react("☀️")
          newMessage.react("🏆")
        })
      }
			if (args[2] == "ping") {
				message.channel.send("<@&795153156140433428> There's a new contest!")
			};
			Modules.Util.deleteMessage(message)
		}
	}
}