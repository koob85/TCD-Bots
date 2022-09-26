Modules = require('../moduleManager.js')

module.exports = {
    name: 'contestvote',
    description: "Sends a message",
    requiredrole: "Server Manager",
    execute(message, args){
       if(Modules.Util.userHasRole(message.member,this.requiredrole) == true){
				 	message.channel.send(Modules.Embeds.contestVoteEmbed)
				 if (args[1] == "ping"){
					 message.channel.send("<@&795153156140433428>")
				 };
         Modules.Util.deleteMessage(message)
       }
    }
}