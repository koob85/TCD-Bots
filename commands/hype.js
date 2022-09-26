Modules = require('../moduleManager.js')
Util = Modules.Util

if (Modules.Settings.Testing) {
	return false
}

Database = require("@replit/database")
hypeDatabase = new Database()

currentHypeMessages = []

function getHypeMessage(hype) {
	if (hype > 4500) {
		return `***WAAAAYYY TOOOO MUCH !HYPEEEEEEE!!!!!!***`
	} else if (hype > 3750) {
		return `***!HYPEEE OVERLOADDDDD!!!!!!***`
	} else if (hype > 2500) {
		return `**SUPER !HYPE!!**`
	} else if (hype > 1400) {
		return `Mega !hype!!!!`
	} else if (hype > 700) {
		return `!hypeeee!!!`
	} else if (hype > 350) {
		return `!hype!!!`
	} else if (hype > 100) {
		return `!hype`
	} else if (hype <= 100) {
		return `*!hype*`
	}
}

//"425766647588978711",
//"479070093750566912",
//"699329295750791192",
//"641453192982429726",

allowedChannels = [
	"913496984692883477",
];

function getHypeEmbed(Title, Subtitle) {
	Subtitle = Subtitle || ""
	Title = Title || "Hype!"
	hypeEmbed = new Discord.EmbedBuilder()
		.setTitle("Update Hype 🕺")
		.setColor('#FF8300')
		.setDescription(Title)
		.setFooter({text: `🎈 ${Subtitle}`})
	return hypeEmbed
}

hypeEnabled = false
var currentHype = 0
saveHype = false

hypeDatabase.get("Hype")
	.then(dataStoreHype => {
		currentHype = dataStoreHype
		saveHype = true
	})

hypeDatabase.get("HypeEnabled")
	.then(dataStoreHypeEnabled => {
		hypeEnabled = dataStoreHypeEnabled
	})

function saveLoop() {
	if (!saveHype) {
		setTimeout(function () {
			saveLoop();
		}, 1000); // 60 // 1 Minute
	};
	setTimeout(function () {
		hypeDatabase.set("Hype", currentHype)
		saveLoop();
	}, 10000); // 60 // 1 Minute
}

tick = 0;
function addTick() {
	setTimeout(function () {
		tick += 1
		addTick();
	}, 1000);
}

saveLoop()
addTick()

// Custom ratelimit
lastSentTick = 0;
function queueMessage(messageInfo, targetChannel) {
	if (lastSentTick != tick) {
		lastSentTick = tick

		// Delete old hype messages
		for (let i = 0; i < currentHypeMessages.length; i++) {
			msg = currentHypeMessages[i]
			if (msg) {
				Modules.Util.deleteMessage(msg)
				currentHypeMessages[i] = null
			}
		}

		// Send message
		targetChannel.send(messageInfo)
			.then(message => {
				currentHypeMessages.push(message)
			})
	}
}

module.exports = {
	name: 'hype',
	description: "Adds hype to the hype train",

	async execute(message, args,) {
		commandType = args[1]
		if (commandType == "reset") {
		if (Modules.Util.userIsManager(message.member)){
				currentHype = 0
				Modules.Util.SendEmbed(message.channel,getHypeEmbed("Hype has been reset ❌", `Was at ${currentHype}`))
			}
		} else if (commandType == "disable") {
		if (Modules.Util.userIsManager(message.member)){
				hypeDatabase.set("HypeEnabled", false)
				hypeEnabled = false
				Modules.Util.SendEmbed(message.channel,getHypeEmbed("Hype has been disabled ❌"))
			}
		} else if (commandType == "enable") {
		if (Modules.Util.userIsManager(message.member)){
				hypeDatabase.set("HypeEnabled", true)
				hypeEnabled = true
				Modules.Util.SendEmbed(message.channel,getHypeEmbed("Hype has been enabled ✅"))
			}
		} else if (commandType == "set") {
		if (Modules.Util.userIsManager(message.member)){
				newHype = args[2]
				if (!newHype || !Number(newHype)) {
					return false
				}
				currentHype = Number(newHype)
				Modules.Util.SendEmbed(message.channel,getHypeEmbed(`Hype has been set to ${newHype}! 🔥`, `Set by ${message.author.username}`))
			}
		} else if (commandType == "save") {
			hypeDatabase.set("Hype", currentHype)
			Modules.Util.SendEmbed(message.channel,getHypeEmbed("Current hype saved 📁"))
		} else if (commandType == "get") {
			Modules.Util.SendEmbed(message.channel,getHypeEmbed(`Current hype is ${currentHype}`))
		} else {
			if (!hypeEnabled) {
				return false, "Hype is not enabled"
			}

			// Ensure it's the correct channels
			if (allowedChannels.includes(String(message.channel.id))) {
				currentHype += 1
				//message.delete()
				//.catch(error =>{console.log(error)})
				hypeMessage = getHypeMessage(currentHype)
				queueMessage({ embeds: [getHypeEmbed(hypeMessage, `${currentHype} 🔥`)]}, message.channel)
			} else {
				return false, "You cannot do this command here."
			}
		}
	}
}