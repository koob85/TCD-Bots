/*
Social Integrations
-----
Allows access to Twitter to update the data strings
*/

// Services
Modules = require('../moduleManager.js')
GameHandler = require("./GameHandler.js")
Database = Modules.DatabaseHandler

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
	
	let LastTweetTime = await Database.GetValue("LastTweet")
	if(!LastTweetTime){
		shouldTweet = true
	} else {
		let Elapsed = Now - LastTweetTime
		if (Elapsed >= TweetTime) {
			ShouldTweet = true
		}
	}
	
	// Check discord
	let LastDiscord = await Database.GetValue("LastDiscord")
	if(!LastDiscord){
		UpdateDiscord = true
	} else {
		let Elapsed = Now - LastDiscord
		if (Elapsed >= DiscordTime) {
			UpdateDiscord = true
		}
	}
	
	let LastGame = await Database.GetValue("LastGame")
	if(!LastGame){
		UpdateGame = true
	} else {
		let Elapsed = Now - LastGame
		if (Elapsed >= GameTime) {
			UpdateGame = true
		}
	}

	// Get the correct remaining
	if (Remaining < 0){
		TotalElapsed -= Math.abs(Math.floor(Remaining))
		Remaining = 0
	}
	
	console.log(Remaining, "REMAINING", TotalElapsed, "ELAPSED")
	console.log(ShouldTweet, "Twitter")
	console.log(UpdateDiscord, "Discord")
	console.log(UpdateGame, "Game")

	if (UpdateDiscord) {
		let Success = await DiscordBot.UpdateClock(Remaining, TotalElapsed)
		if (Success) {
			Database.SetValue("LastDiscord", Now)
		}
	}

	if (UpdateGame) {
		let Success = await GameHandler.ChangeName(Remaining, TotalElapsed)
		if (Success) {
			Database.SetValue("LastGame", Now)
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