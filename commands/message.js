Modules = require('../moduleManager.js')

module.exports = {
    name: 'message',
    description: "Sends a message",
    execute(message, args) {
			console.log(message,args)
        if (Modules.Util.userIsManager(message.member)) {
					let Embed = Modules.Embeds[args[1]]
            if (Embed) {
							Modules.Util.SendEmbed(message.channel,Embed)
              Modules.Util.deleteMessage(message)
            } else {
                return;
            }
        }
    }
}