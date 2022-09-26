Modules = require('./moduleManager.js')

function TestCheck(){
	if (Modules.Settings.Testing){
		console.error("WARNING: TESTING IS ENABLED. SAVING TO REPL WILL BE DISABLED.")
	}
}

TestCheck()