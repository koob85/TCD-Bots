Discord = require("discord.js");

module.exports = {
	// Misc Data
	verifyRoleId: "1016785712869290072",
	verifyChannelId: "1016785714270191667",
	hypeChannelId: "913496984692883477", // Unused
	botsChannelId: "1016785715461374020",
	submissionsChannelId: "1011944759490773082", // Unused
	verifyMessageId: "1024014780522053682",
	auditLogChannelId: "1016785714639286377",
	bbanRoleId: "1016785713003495608",
	generalChannelId: "1016785715461374018",
	showcaseChannelId: "597837588069482517",
	elapsedChannelId: "1024482149891584000",
	remainingChannelId: "1024449031331651634",
	mainGuildId: "1016785712869290064",
	
	// Tables
	codes: ["discordance"], //"sweettweets"
	randomMessage: ["The timer remains ticking"],
	roccResponse: ["<:Rocc:620680227332423710>", "<:RoccBod:651199921831280667>"],
	welcomeMessages: ["Welcome to The Countdown community, PLAYERPING!","Hey there, PLAYERPING, welcome to The Countdown community!","Hi, PLAYERPING, welcome to TCD!"],

	Descriptions: {
		"Default" : "Welcome to The Countdown ⏰\nLive Stats:\nRemaining: {TIMEREMAINING}\nElapsed:{TIMEELAPSED}"
	},
	Names: {
		"Default" : "This Game Will Be Deleted in {TIME_ABREVIATED}",
		"Ended" : "This Game Has Been Deleted.",
	},
	
	// Strings
	banResponse: "**You have been banned from the The Countdown Discord server** \nYou can still remain in the server to check out announcements and updates, but you cannot send or read messages. \nYou can DM a Moderator in `One Month` to appeal your ban.",
	unBanResponse: "**You have been un-banned from the The Countdown Discord server!** \nPlease head over to <#700153470086283305> to re-enter the server",
}