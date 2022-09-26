Modules = require('../moduleManager.js')
roccs = Modules.roccResponse

module.exports = {
    name: 'rocc',
    description: "Picks a random rocc and replies with it!",
    execute(message, args) {
        M = Modules.Util.getRandomInteger(0, roccs.length)
        message.channel.send(roccs[M]);
    }
}