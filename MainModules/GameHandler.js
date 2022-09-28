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

		if (TimeRemaining > 0) {
			// Get hours remaining
			let RemainingText = Modules.Util.getTimeString(TimeRemaining)
			let ElapsedName = `Elapsed: ${Modules.Util.getTimeString(TimeElapsed)}`
			let RemainingAbreviated = Modules.Util.getAbreviatedTimeString(TimeRemaining)

			// Update it
			let Name = Modules.Names[Modules.Settings.NameType || "Default"]
			Name = Name.replace("{TIME_ABREVIATED}", RemainingAbreviated)

			let Description = Modules.Descriptions[Modules.Settings.DescriptionType || "Default"]
			Description = Description.replace("{TIMEREMAINING}", RemainingText)
			Description = Description.replace("{TIMEELAPSED}", ElapsedName)

			
			noblox.updateUniverse(process.env["UniverseId"], { "name": Name, "description": Description })
			.catch((something) => {
				return false
			})
			.then((something) => {
				return true
			})
			
			return true
		}
	}
}