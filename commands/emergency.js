Modules = require('../moduleManager.js')

let allowedIds = [
	333617713060642816, // Vik
	224298985446309900, // Koob
	784435606759538719, // Ty
	494252331202773003, // Elle
]

module.exports = {
	name: 'emergency',
	description: "Allows for certain members to become cadets to handle certain situations (emergencies)",
	execute(message, args, ) {
		console.log(message.author)
		if (allowedIds.find(id => id == message.author.id)) {
			console.log("Hello")
			// Add role
			var modRole = message.guild.roles.cache.find(role => role.id == Modules.cadetRoleId);
			message.member.roles.add(modRole);

			// Send message
			message.channel.send("✅ You have been temporarily made mod.")

			// Send log embed
			var AuditChannel = message.guild.channels.cache.get(Modules.auditLogChannelId)
			let logEmbed = new Discord.EmbedBuilder()
				.setTimestamp()
				.setAuthor({ name: message.author.username + " Made Temp Mod", iconURL: message.member.avatarURL() })
				.setColor('#9579c5')
				.addFields(
					{ name: "User", value: "<@" + message.author.id + ">", inline: true },
				);

			Modules.Util.SendEmbed(AuditChannel, logEmbed)

		}
	}
}