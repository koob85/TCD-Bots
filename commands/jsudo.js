Modules = require('../moduleManager.js')

module.exports = {
	name: 'jsudo',
	description: "Say something via a bot!",
	execute(message, args) {
		if (Modules.Util.userIsMod(message.member)){
			if (message.mentions.channels.size !== 0) {
				var TC = args[1].substring(2);
				var TCC = TC.substring(0, TC.length - 1);
				if (message.guild.channels.cache.get(TCC)) {
					if (args[2]) {
						const channel = message.guild.channels.cache.get(TCC)
						args.shift() // removes command
						args.shift() // removes channel
						channel.send(args.join(" "))
					} else {
						Modules.Util.deleteMessage(message)
					}
				} else {
					args.shift() // removes command
					message.channel.send(args.join(" "))
					Modules.Util.deleteMessage(message)
				}
			} else {
				if (args[1]) {
					args.shift() // removes command
					message.channel.send(args.join(" "))
					Modules.Util.deleteMessage(message)
				} else {
					Modules.Util.deleteMessage(message)
				}
			}
		}
	}
}