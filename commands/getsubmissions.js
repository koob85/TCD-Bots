Modules = require('../moduleManager.js')

async function GetLotsOfMessages(channel, limit = 500) {
	const sum_messages = [];
	let last_id;

	while (true) {
		const options = { limit: 100 };
		if (last_id) {
			options.before = last_id;
		}

		const messages = await channel.messages.fetch(options);
		console.log(messages)
		messages.forEach((key, value) => {
			sum_messages.push(key)
		})
		last_id = messages.last().id;

		if (messages.size != 100 || sum_messages >= limit) {
			break;
		}
	}

	return sum_messages;
}

module.exports = {
	name: 'getsubmissions',
	description: "Sends a message",
	async execute(message, args) {
		if (Modules.Util.userIsMod(message.member)) {
			//Make it happen
			Modules.Util.deleteMessage(message)
			let MessagesToSearch = await GetLotsOfMessages(message.channel);
			let finalArray = [];

			for (i = 0; i < MessagesToSearch.length; i++) {
			}

			const putInArray = async (data) => finalArray.push(data);

			for (const newMessage of MessagesToSearch.reverse()) {
				if (newMessage) {
					console.log(newMessage)
					var content = "";
					var messageLink = `https://discord.com/channels/${newMessage.guild.id}/${newMessage.channel.id}/${newMessage.id}`
					//Set the content correctly
					if (newMessage.attachments.size > 0) {
						if (newMessage.attachments.size != 1) {
							content = messageLink
						} else {
							content = newMessage.attachments.first().proxyURL
							var end = content.substring(content.length - 3)
							console.log(end)
							if (end == "wmv") {
								content = messageLink
							}
						}

					} else if (newMessage.content.includes("youtube") || newMessage.content.includes("youtu.be") || newMessage.content.includes("google")) {
						content = newMessage.content
					} else if (newMessage.content.split("discordapp").length - 1 == 1) {
						content = newMessage.content
					} else {
						content = messageLink
					}
					await putInArray(`${newMessage.author.id}, ${content}`);
				}
			}

			//console.log(finalArray);

			for (var key in finalArray) {
				console.log(finalArray[key])
			}


		}
	}
}
