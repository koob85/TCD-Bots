Modules = require('../moduleManager.js')

module.exports = {
    name: 'twitter',
    description: "Sends Firebrand's Twitter",
    execute(message, args) {
        message.channel.send("https://twitter.com/PlayRoCitizens").then(replyMsg => {
						setTimeout(() => Modules.Util.deleteMessage(replyMsg), Modules.Settings.AutoDeleteDebounce)
					});
    }
}