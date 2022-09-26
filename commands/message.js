Modules = require('../moduleManager.js')

module.exports = {
    name: 'message',
    description: "Sends a message",
    execute(message, args,){
		if (Modules.Util.userIsManager(message.member)){
           if (Modules[args[1]]){
               message.channel.send(Modules[args[1]]);
               Modules.Util.deleteMessage(message)
           }else{return;}
       }
    }
}