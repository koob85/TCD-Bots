Discord = require("discord.js");

var RankTable = []
var RolesDone = false

function PopulateRanks(Server) {
	Server.roles.cache.forEach(role => {
		if (role.name.substring(0, 5) == "Level") {
			var Level = Number(role.name.substring(6))
			var NewTab = { level: Level, id: role.id }
			if (Level) {
				RankTable.push(NewTab)
			}
		}
	})
}

const GuildWhitelist = ["1016785712869290064"]

module.exports = {
	// Member has a role in the discord
	userHasRole(member, role) {
		if (member.roles.cache.some(r => r.name === role)) {
			return true
		} else {
			return false
		}
	},

	// Is in a valid guild
	IsAllowedGuild(Id) {
		return GuildWhitelist.includes(Id.toString())
	},

	deleteMessage(message) {
		if (message.deletable) {
			message.delete()
				.then(messageValue => {
					return true
				})
				.catch(error => {
					console.log(error)
					return false
				})
		}
	},

	dmMember(member, messageContents) {
		member.send(messageContents)
			.catch(error => {
				console.log("Failed to DM member message.")
			})
	},

	// Sends an embed. literally so simple omg.
	SendEmbed(Channel, Embed) {
		Channel.send({ embeds: [Embed] });
	},

	// Member has a server manager/community manager role
	userIsManager(member) {
		acceptedRoles = [
			"Community Manager",
			"Server Manager",
			"Creator",
		]

		hasRole = false
		for (i = 0; i < acceptedRoles.length; i++) {
			if (member.roles.cache.some(r => r.name === acceptedRoles[i])) {
				hasRole = true
				break
			}
		}

		return hasRole
	},

	// Member has a moderator role
	userIsMod(member, Senior) {
		acceptedRoles = [
			"Senior Moderator",
			"Community Manager",
			"Server Manager",
			"Creator",
		]

		// Check to see if it's only accepting senior. If not, add Moderator to the list.
		if (!Senior) {
			acceptedRoles.push("Moderator")
		}

		hasRole = false
		for (i = 0; i < acceptedRoles.length; i++) {
			if (member.roles.cache.some(r => r.name === acceptedRoles[i])) {
				hasRole = true
				break
			}
		}

		return hasRole || module.exports.userIsManager(member)
	},

	// Rank up a member
	rankUserUp(member, targetLevel, messageRef) {
		//Populate Ranks
		if (!RolesDone) {
			PopulateRanks(messageRef.guild)
			RolesDone = true;
		}

		if (member !== undefined && targetLevel !== undefined) {
			for (i = 0; i < RankTable.length; i++) {
				if (RankTable[i].level <= targetLevel) {
					var NewRole = messageRef.guild.roles.cache.find(role => role.id == RankTable[i].id);
					member.roles.add(NewRole);
				}
			}
			return true
		} else {
			return false
		}
	},

	// User has a higher role than the provided
	userHasHigherRole(member, role, message) {
		var rolee = message.guild.roles.cache.find(r => r.name == role);
		if (member.roles.highest.position >= rolee.position) {
			return true
		} else {
			return false
		}
	},

	// Get a random integer
	getRandomInteger(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	},

	// Creates and returns a moderation log embed
	getLogEmbed(Title, Description, ModeratorId) {
		logEmbed = new Discord.MessageEmbed()
			.setTitle(Title)
			.setDescription(Description)
			.setColor('#0xFFC100')
			.addFields(
				{ name: "Moderator", value: "<@" + ModeratorId + ">", inline: true },
			);
		return logEmbed
	},

	getTimeString(Time, Type) {
		Type = Type || "Letters"

		let Days = Math.floor(Time / 86400)
		Time -= (Days * 86400)

		let Hours = Math.floor(Time / 3600)
		Time -= (Hours * 3600)

		let Minutes = Math.floor(Time / 60)
		Time -= (Minutes * 60)

		if (Type == "Letters") {
			return `${Days > 0 && Days + "d " || ""}${Hours}h ${Minutes}m`
		} else {
			return `${Days > 0 && Days + "d " || ""}${Hours}h ${Minutes}m`
		}
	},

	getAbreviatedTimeString(Time) {

		let Days = Math.floor(Time / 86400)
		Time -= (Days * 86400)

		if (Days > 0) {
			return `${Days} ${Days > 1 && "Days" || "Day"}`
		}

		let Hours = Math.floor(Time / 3600)
		Time -= (Hours * 3600)

		if (Hours > 0){
			return `${Hours} ${Hours > 1 && "Hours" || "Hour"}`
		}
		
		let Minutes = Math.floor(Time / 60)
		Time -= (Minutes * 60)

		if (Minutes > 0){
			return `${Minutes} ${Minutes > 1 && "Minutes" || "Minute"}`
		}
		
		return "1 Minute"
	},

}