/*
Social Integrations
-----
Allows access to Twitter to update the data strings
*/

// Services
const Database = require("@replit/database")
Modules = require('../moduleManager.js')
GameHandler = require("./GameHandler.js")

recentDatabase = new Database()

DiscordBot = require("./DiscordBot.js")

TweetTime = 60
DiscordTime = 350
GameTime = 200 //200
loopTime = 5

async function CheckTime() {

	let ShouldTweet = false
	let UpdateDiscord = false
	let UpdateGame = false

	let NewDate = new Date()
	let Now = Math.floor(NewDate.getTime() / 1000)

	let RemainingInfo = await Modules.DataFetching.GetInfo()
	let EndTime = RemainingInfo["EndTime"]
	let StartTime = RemainingInfo["StartTick"]

	let TotalElapsed = Now - StartTime
	let Remaining = EndTime - Now

	// Check if should tweet
	await recentDatabase.get("LastTweet")
		.then(Time => {
			if (!Time) {
				shouldTweet = true
				return
			}
			let Elapsed = Now - Time
			if (Elapsed >= TweetTime) {
				ShouldTweet = true
			}
		})

	// Check discord
	await recentDatabase.get("LastDiscord")
		.then(Time => {
			if (!Time) {
				UpdateDiscord = true
				return
			}
			let Elapsed = Now - Time
			if (Elapsed >= DiscordTime) {
				UpdateDiscord = true
			}
		})

	await recentDatabase.get("LastGame")
		.then(Time => {
			if (!Time) {
				UpdateGame = true
				return
			}
			let Elapsed = Now - Time
			if (Elapsed >= GameTime) {
				UpdateGame = true
			}
		})

	console.log(Remaining, "REMAINING", TotalElapsed, "ELAPSED")
	console.log(ShouldTweet, "Twitter")
	console.log(UpdateDiscord, "Discord")
	console.log(UpdateGame, "Game")

	if (UpdateDiscord) {
		let Success = await DiscordBot.UpdateClock(Remaining, TotalElapsed)
		if (Success) {
			recentDatabase.set("LastDiscord", Now)
		}
	}

	if (UpdateGame) {
		let Success = await GameHandler.ChangeName(Remaining, TotalElapsed)
		if (Success) {
			recentDatabase.set("LastGame", Now)
		}
	}

}

function RunLoop() {
	setTimeout(function () {
		CheckTime()
		RunLoop();
	}, loopTime * 1000); // X seconds
}

// Initiate
function Initiate() {
	Modules.DataFetching.Initiate()

	RunLoop()

}

Initiate()