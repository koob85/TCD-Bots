Modules = require('../moduleManager.js')
const Discord = require("discord.js");

module.exports = {
    name: 'unbban',
    description: "Un-Blacklist bans a member",
    requiredrole: "Moderator",
    execute(client, message, args,) {
        if (Modules.Util.userIsMod(message.member)) {
            var Channel = message.guild.channels.cache.get(Modules.auditLogChannelId)
            var Member
            if (args[1]) {
                if (message.mentions.members.size !== 0) {
                    Member = message.mentions.members.first();
                } else {
                    if (message.guild.members.cache.get(args[1])) {
                        Member = message.guild.members.cache.get(args[1]);
                    }
                }
            }
            if (Member !== undefined) {
                if (Modules.Util.userHasHigherRole(Member, this.requiredrole, message) == false) {
                    args.shift()// removes command
                    args.shift()// removes id/mention
                    if (args[0]) {
                        EmbedText = args.join(" ")
                    } else {
                        EmbedText = "None"
                    }
                    logEmbed = new Discord.EmbedBuilder()
                        .setTimestamp()
                        .setAuthor({name: Member.user.username+" Un-Blacklist Banned", iconURL: Member.user.avatarURL() })
                        .setColor('#07da63')
                        .setFooter({text: "Id: " + Member.user.id})
                        .addFields(
                            { name: "User", value: "<@" + Member.user.id + ">", inline: true },
                            { name: "Moderator", value: "<@" + message.author.id + ">", inline: true },
                        )
                    var role1 = message.guild.roles.cache.find(role => role.id == Modules.bbanRoleId);
                    Member.roles.remove(role1);
									
										Modules.Util.dmMember(Member,Modules.unBanResponse)
                    Channel.send({ embeds: [logEmbed]});
                    message.channel.send("<@" + Member.user.id + "> has been Un-Blacklist Banned")
                    return (Member)
                }
            } else {
                message.channel.send("Failed to unbban user.")
            }
        }
    }
}