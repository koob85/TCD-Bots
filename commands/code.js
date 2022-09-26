Modules = require('../moduleManager.js')

module.exports = {
	name: 'code',
	description: "Picks a random code and replies with it!",
	execute(message, args) {
		var M = Modules.Util.getRandomInteger(0, Modules.codes.length)
		message.channel.send("Use the code " + Modules.codes[M] + "!");
	}
}