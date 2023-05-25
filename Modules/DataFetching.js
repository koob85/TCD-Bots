var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let BaseURL = `https://apis.roblox.com/datastores/v1/universes/${process.env["UniverseId"]}/standard-datastores/datastore/entries/entry`

let StartTick = 0
let BaseDuration = 0
let CurrentSupplemental = 0
let SupplementalDividend = 10

let DataTesting = true

async function GetBaseInfo() {

	let OriginalRequest = new XMLHttpRequest()
	let Params = "datastoreName=ExternalData&entryKey=Main"

	await new Promise((resolve, reject) => {

		OriginalRequest.open('GET', BaseURL + "?" + Params, true);
		OriginalRequest.setRequestHeader("x-api-key", process.env["RobloxKey"])
		OriginalRequest.send();

		OriginalRequest.onreadystatechange = function () {
			if (this.readyState === 4) {
				resolve(this.responseText)
			}
		};
	})
		.then((Body) => {
			Body = JSON.parse(Body)
			BaseDuration = Body["Duration"]
			StartTick = Body["StartTime"]
			SupplementalDividend = Body["SupplementalDividend"] || SupplementalDividend
			BaseCalculated = true
			return true
		})
		
		// if it fails, kill the repl and try again
		.catch((Error) => {
			return GetBaseInfo()
		})
}

async function UpdateSupplemental(FunctionToExecute) {

	await new Promise((resolve, reject) => {

		let DataFetchRequest = new XMLHttpRequest()
		let Params = `datastoreName=Supplemental&entryKey=${DataTesting && "Testing1" || "Main"}`

		DataFetchRequest.open('GET', BaseURL + "?" + Params, true);
		DataFetchRequest.setRequestHeader("x-api-key", process.env["RobloxKey"])
		DataFetchRequest.send();

		DataFetchRequest.onreadystatechange = function () {
			if (this.readyState === 4) {
				resolve(this.responseText)
			}
		};
	})
		.then((Supplemental) => {
			let NumberVersion = Number(Supplemental)
			if (NumberVersion) {
				CurrentSupplemental = NumberVersion / SupplementalDividend
				return CurrentSupplemental
			}
		})
		.catch(console.error)
}

module.exports = {
	async Initiate() {
		await GetBaseInfo()
	},
	GetSupp() {
		return CurrentSupplemental
	},
	async GetInfo() {
		await UpdateSupplemental()
		let EndTime = StartTick + BaseDuration + CurrentSupplemental
		return { EndTime, StartTick }
	},
	GetStart() {
		return StartTick
	}
};