Modules = require('../moduleManager.js')

module.exports = {
	name: 'contestwinners',
	description: "Sends a message",
	execute(message, args) {
		if (Modules.Util.userIsMod(message.member)) {
			Modules.Util.SendEmbed(message.channel, Modules.Embeds.contestWinnerEmbed)
			//message.channel.send(Modules.winnerAttach);
			message.channel.send("**Winners**\n<@!496004921523437568>\n<@!696789204302299137>\n<@!743931345427890288>")
			message.channel.send("**Runner Ups**\n<@!396815625013690370>\n<@!881425058864721940>\n<@!671802558817370164>")
			Modules.Util.deleteMessage(message)
		}
	}
}