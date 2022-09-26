Modules = require('../moduleManager.js')

module.exports = {
    name: 'fakeban',
    description: "BANN'D",
    execute(message, args,){
       if(Modules.Util.userIsMod(message.member) == true){
           message.channel.send("**FIREBANNED <:fdab:620677411759194132>**")
       }
    }
}