// Services
const fs = require('fs');

// Compile modules
const commandFiles = fs
	.readdirSync('./Modules/')
	.filter(file => file.endsWith('.js'))
	.filter(file => file.name != "modules.js");

for (const file of commandFiles) {
	moduleContent = require(`./Modules/${file}`);
	fileName = file.slice(0,-3)
	module.exports[fileName] = moduleContent
}

let defaultModules = require(`./Modules/modules.js`)
for (index in defaultModules){
	module.exports[index] = defaultModules[index]
}