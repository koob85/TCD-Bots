Modules = require('../moduleManager.js')
Discord = require("discord.js");

whitelistedChannels = [
	"425766647588978711",
	"479070093750566912",
	"641453192982429726",
]

module.exports = {
	name: 'slowmode',
	description: "Adjusts a channel's slowmode",
	execute(client, message, args,) {
		if (Modules.Util.userIsMod(message.member, true)) {
			auditLog = message.guild.channels.cache.get(Modules.auditLogChannelId)
			messageChannel = message.channel
			if (whitelistedChannels.includes(messageChannel.id)) {
				time = args[1] && args[1].toLowerCase()

				if (Number(time) && Number(time) < 1 || time == "0" || time == "disable") {
					messageChannel.setRateLimitPerUser(0)
						.then(result => {
							messageChannel.send("Slowmode disabled ❌")
							Modules.Util.SendEmbed(auditLog, Modules.Util.getLogEmbed("Slowmode Changed", `<#${messageChannel.id}> set to 0 seconds`, message.author.id))
						})
				} else if (Number(time)) {
					messageChannel.setRateLimitPerUser(Number(time))
						.catch(console.error)
						.then(result => {
							messageChannel.send(`Slowmode set to ${time} seconds ✅`)
							Modules.Util.SendEmbed(auditLog, Modules.Util.getLogEmbed("Slowmode Changed", `<#${messageChannel.id}> set to ${time} seconds`, message.author.id))
						})
				}
			}
		}
	}
}