// Variables
let noblox = require("noblox.js")
let Modules = require("../moduleManager.js")

let loggedIn = false

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let URL = "https://www.roblox.com/places/10530039851/update?Name=This+Game+Will+Be+Deleted+in+1+Day&Description=The+clock+is+always+tick"


// Startup
function StartApp() {
	noblox.setCookie(process.env['GroupToken'])
		.then(User => {
			loggedIn = true
			console.log(User.UserName)
		})
		.catch(console.error)


}

StartApp()

module.exports = {
	async ChangeName(TimeRemaining, TimeElapsed) {

		if (!loggedIn) {
			return false
		}
	
		// Get hours remaining
		let RemainingText = Modules.Util.getTimeString(TimeRemaining)

		let ElapsedName = `Elapsed: ${Modules.Util.getTimeString(TimeElapsed)}`
		let RemainingAbreviated = Modules.Util.getAbreviatedTimeString(TimeRemaining)

		// Update it
		let NameType = Modules.Settings.NameType
		if (TimeRemaining <= 0){
			NameType = "Ended"
		}
		
		// Format name
		let Name = Modules.Names[NameType || "Default"]
		Name = Name.replace("{TIME_ABREVIATED}", RemainingAbreviated)

		// Format description
		let Description = Modules.Descriptions[Modules.Settings.DescriptionType || "Default"]
		Description = Description.replace("{TIMEREMAINING}", RemainingText)
		Description = Description.replace("{TIMEELAPSED}", ElapsedName)
		
		// Actually update
		let Info = { "name": Name } // { "name": Name, "description": Description }
		noblox.updateUniverse(process.env["UniverseId"], Info)
		.catch((something) => {
			return false
		})
		.then((something) => {
			return true
		})
		
		return true
	}
}