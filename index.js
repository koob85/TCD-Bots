/*
TCD Bots Main File
-----
Controls the bots, provides commands, and improves the game community.
*/

// Services
Discord = require('discord.js');
Modules = require('./moduleManager.js')
const keep_alive = require('./keep_alive.js');

const Database = require("@replit/database");
const { GatewayIntentBits } = require('discord.js');
banDatabase = new Database()

// Settings
const fs = require('fs');

// Gather commands
Commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	command = require(`./commands/${file}`);
	Commands.set(command.name, command);
}

// Test Check
require(`./testCheck.js`);

// Initiate
const TKbot = new Discord.Client({
	// TODO: UPDATE INTENTS TO reflect what we actually need
	intents: [
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessageReactions,
	],
	partials: ["CHANNEL"],
});

// Log bots in
TKbot.login(process.env['BotToken'])

// Functions
function RandomTextLoop() {
	setTimeout(function () {
		console.log("Random text loop")
		var M = Modules.Util.getRandomInteger(0, Modules.randomMessage.length);
		const guild = Hbot.guilds.cache.get('425766647588978709');
		guild.channels.cache
			.get('425766647588978711')
			.send(Modules.randomMessage[M]);
		RandomTextLoop();
	}, 7200000); // 7200000 // 2 Hours
}

function banMember(message) {
	setTimeout(function () {
		var role1 = message.guild.roles.cache.find(
			role => role.id == Modules.verifyRoleId
		);
		message.member.roles.remove(role1);
	}, 500);
}

function DeleteVerifyMessages() {
	setTimeout(function () {
		const channel = TKbot.channels.cache.get(Modules.verifyChannelId);
		channel.messages.fetch().then(messages => {
			for (const [id, message] of messages) {
				if (id !== Modules.verifyMessageId && message.deletable) {
					Modules.Util.deleteMessage(message)
				}
			}
		});
		DeleteVerifyMessages();
	}, 900000); // 15 Minutes
}

VerifyTable = {}
function WelcomeMember(member) {
	// Welcome message
	if (Modules.Settings.WelcomeNewVerifies) {
		isVerified = VerifyTable[member.id]
		if (!isVerified) {
			// Not verified in this session
			VerifyTable[member.id] = true
			M = Modules.Util.getRandomInteger(0, Modules.welcomeMessages.length)
			MessageContent = Modules.welcomeMessages[M]
			if (MessageContent && Hbot) {
				MessageContent = MessageContent.replace("PLAYERPING", `<@${member.id}>`)
				var Channel = Hbot.channels.cache.get(Modules.generalChannelId)
				Channel.send(MessageContent).then(newMessage => {
					newMessage.react("👋")
				})
			}
		}
	}
}

/* 
The Timekeeper Bot
-----
fun stuff.
*/

TKbot.on('ready', () => {
	console.log('HenryBot is now online!');

	isOn = true;

	TKbot.user.setActivity("with the space time continuum")
	RandomTextLoop();
	DeleteVerifyMessages();
});

TKbot.on('messageCreate', async message => {
	//console.log("Message create HBot")  
	let Prefix = Modules.Settings.Prefixes.Timekeeper
	let ModerationPrefix = Modules.Settings.Prefixes.Moderation

	// Text message
	if (message.channel.type == 0) { // GUILD_TEXT = 0
		// check valid guild
		if (!Modules.Util.IsAllowedGuild(message.guild.id)) {
			return false, "You cannot use this bot in this guild"
		}

		// Handle base commands
		let args = message.content.substring(Prefix.length).split(' ');
		if (message.content.charAt(0) === Prefix) {

			switch (args[0].toLowerCase()) {
				case 'code':
					Commands.get('code').execute(message, args);
					break;
				case 'twitter':
					Commands.get('twitter').execute(message, args);
					break;
				case 'rock':
					Commands.get('rocc').execute(message, args);
					break;
				case 'rocc':
					Commands.get('rocc').execute(message, args);
					break;
				case 'emergency':
					Commands.get('emergency').execute(message, args);
					break;
				case 'noob':
					message.channel.send('Yes, <@' + message.author.id + '> is a noob!');
					break;
				case 'game':
					message.channel.send("http://playrocitizens.com").then(replyMsg => {
						setTimeout(() => Modules.Util.deleteMessage(replyMsg), Modules.Settings.AutoDeleteDebounce)
					});
					break;
				case 'group':
					message.channel.send("https://www.roblox.com/groups/2556057").then(replyMsg => {
						setTimeout(() => Modules.Util.deleteMessage(replyMsg), Modules.Settings.AutoDeleteDebounce)
					});
					break;
				case 'tree':
					message.channel.send('TreeGang™ 🌳');
					break;
				case 'koob':
					message.channel.send('is a noob');
					break;
				case 'koo':
					message.channel.send('is a noo');
					break;
				case 'clown':
					if (message.author.id == '493400807396343828') {
						message.channel.send('yea ur STILL a clown ben we know');
					}
					break;
				case 'hmessage':
					Commands.get('message').execute(message, args);
					break;
				case 'sudo':
					Commands.get('sudo').execute(message, args);
					break;
				case 'mmessage':
					Commands.get('message').execute(message, args);
					break;
				case 'ban':
					Commands.get('fakeban').execute(message, args);
					break;
				case 'zombies':
					message.channel.send('Haha... W-what zombies? *Ahaha~*');
					break;
				case 'may':
					message.channel.send('or june');
					break;
				case 'poll':
					Commands.get('poll').execute(message, args);
					break;
				case 'modmessage':
					Commands.get('modmessage').execute(message, args);
					break;
				case 'contestmessage':
					Commands.get('contestmessage').execute(message, args);
					break;
				case 'contestvote':
					Commands.get('contestvote').execute(message, args);
					break;
				case 'jsudo':
					Commands.get('jsudo').execute(message, args);
					break;
				case 'cping':
					Commands.get('cping').execute(message, args);
					break;
				case 'contestwinners':
					Commands.get('contestwinners').execute(message, args);
					break;
				case 'temp':
					Commands.get('temp').execute(message, args);
					break;
				case 'getsubmissions':
					Commands.get('getsubmissions').execute(message, args);
					break;
				case 'hype':
					Commands.get('hype').execute(message, args);
					break
				case "editmmessage":
					if (Modules.Util.userHasRole(message.member, "Server Manager") == true) {
						if (args[1]) {
							var Channel = Mbot.channels.cache.get(args[1])
							if (args[2]) {
								Channel.messages.fetch({ around: args[2], limit: 1 })
									.then(messages => {
										var Msg = Modules[args[3]]
										if (Msg) {
											messages.first().edit(Msg);
										} else {
											args.shift() // removes command
											args.shift() // removes channel
											args.shift() // removes message id
											messages.first().edit(args.join(" "));
										}
									});
							}
						}
					}
					break;
			}
			return;
		}

		// Moderation Actions
		if (message.content.charAt(0) === ModerationPrefix) {
			switch (args[0].toLowerCase()) {
				case 'bban':
					var Member = Commands.get('bban').execute(Mbot, message, args);
					if (Member) {
						if (!Modules.Settings.Testing) {
							banDatabase.set(Member.user.id, true)
						}
					}
					break;
				case 'unbban':
					var Member = Commands.get('unbban').execute(Mbot, message, args);
					if (Member) {
						if (!Modules.Settings.Testing) {
							banDatabase.delete(Member.user.id)
						}
					}
					break;
				case 'lvlup':
					Commands.get('lvlup').execute(Mbot, message, args);
					break
				case 'slowmode':
					Commands.get('slowmode').execute(Mbot, message, args);
					break
			}
		}

		if (message.channel.id == Modules.botsChannelId) {
			if (message.author.id == 159985870458322944) { //If the sender is mee6
				var content = message.content
				var Member = message.mentions.members.first()
				if (content.substring(content.length - 26, content.length) == "<:fdab:620677411759194132>" && content.substring(0, 2) == "GG") {
					var TwoDigit = Number(content.substring(content.length - 28, content.length - 30))
					if (TwoDigit) {
						Modules.Util.rankUserUp(Member, TwoDigit, message);
					} else {
						Numb = Number(content.substring(content.length - 28, content.length - 29))
						if (Numb) {
							Modules.Util.rankUserUp(Member, Numb, message);
						}
					}
	
				}
			}
	
		} else if (message.channel.id == Modules.verifyChannelId) {
			let args = message.content.substring(JunePrefix.length).split(' ');
			if (args[0].toLowerCase() == 'verify') {
				var IsBanned = false;
				banDatabase.get(message.member.id).then(NewVar => {
					IsBanned = NewVar
					if (!IsBanned) {
	
						// They get verified
						var role1 = message.guild.roles.cache.find(
							role => role.id == Modules.verifyRoleId
						);
						message.member.roles.add(role1);
						WelcomeMember(message.member)
	
					} else {
						var role1 = message.guild.roles.cache.find(
							role => role.id == Modules.bbanRoleId
						);
						message.member.roles.add(role1);
						banMember(message);
					}
				});
	
				if (message.id !== '700164972726059049') {
					Modules.Util.deleteMessage(message)
				}
			} else {
				if (message.id !== '700164972726059049') {
					Modules.Util.deleteMessage(message)
				}
			}
		} else if (message.channel.id == Modules.hypeChannelId) {
			let args = message.content.substring(JunePrefix.length).split(' ');
			if (args[0].toLowerCase() == 'hype') {
			} else if (message.member.id != '698978344716206141') {
				Modules.Util.deleteMessage(message)
			};
		};
		
	}


	// Ensure they're not a bot
	if (message.author.bot) return;

});
