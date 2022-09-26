Modules = require('../moduleManager.js')
const Discord = require("discord.js");

var RolesDone = false
var RankTable = []

module.exports = {
    name: 'lvlup',
    description: "Gives a user all of the ranks below a certain level",
    execute(client, message, args,){
			if(!RolesDone){
				PopulateRanks(message.guild)
				RolesDone = true;
			}
      if(Modules.Util.userIsMod(message.member) == true){
      	var Channel = message.guild.channels.cache.get(Modules.auditLogChannelId)
				var Member
				var TargetLevel
				if (args[1]){
						if(message.mentions.members.size !== 0){
								Member = message.mentions.members.first();
						} else {
								if(message.guild.members.cache.get(args[1])){
										Member = message.guild.members.cache.get(args[1]);
								}
						}
				}

				if (args[2]){
					if (Number(args[2]) !== undefined){
						TargetLevel = Number(args[2])
					}
				}
				console.log(Member)

				var Success = Modules.Util.rankUserUp(Member,TargetLevel,message);
				if (Success) {
					logEmbed = new Discord.EmbedBuilder()
					.setTimestamp()
					.setAuthor({name: Member.user.username+" Leveled Up", iconURL: Member.user.avatarURL() })
					.setColor('#ebb734')
					.setFooter({text: "Id: "+Member.user.id})
					.addFields(
					{name: "By:",value: "<@"+message.author.id+">"},
					{name: "To Level:",value: TargetLevel+""},
					);
					message.channel.send("User: **<@"+Member.user.id+">** has been ranked up to level **"+TargetLevel+"**")
					Modules.Util.SendEmbed(Channel,logEmbed)
				} else {
					message.channel.send("Command failed.")
				}
        }
			}
}


function PopulateRanks(Server){
	Server.roles.cache.forEach(role => {
		if(role.name.substring(0,5) == "Level"){
			var Level = Number(role.name.substring(6))
			var NewTab = {level: Level, id: role.id}
			if(Level){
				RankTable.push(NewTab)
			}
			}
	})
}