Modules = require('../moduleManager.js')

module.exports = {
    name: 'modmessage',
    description: "Sends a message",
    execute(message){
		if (Modules.Util.userIsManager(message.member)){
         message.channel.send(Modules.modEmbed1);
         message.channel.send(Modules.modEmbed2);
         message.channel.send(Modules.modEmbed3);
         message.channel.send(Modules.modEmbed4);
         Modules.Util.deleteMessage(message)
       }
    }
}