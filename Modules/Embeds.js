const Discord = require("discord.js")

module.exports = {  
	// Embeds
	rulesEmbed: new Discord.EmbedBuilder()
		//.setTitle("**Rules**","")
		.setColor("#2596be")
		.addFields(
			{ name: "**Keep it PG13**", value: "- Do not use obscene language or post about extreme NSFW topics. Do not attempt to bypass filters.\n- Do not post NSFW content or content depicting extreme violence/gore." },
			{ name: "**Stay Safe**", value: "- Do not request or share personal information about yourself or others. If someone asks for personal information, report them to a moderator immediately. \n- Do not send unsolicited DMs to other server members. Report unsolicited DMs to a moderator." },
			{ name: "**Be Respectful**", value: "- Do not insult or harass other users. \n- Be respectful of other people and their opinions. \n- Do not use nicknames to impersonate other server members (including bots)." },
			{ name: "**No Links or Advertising**", value: "This includes discord servers, social media profiles, scam sites, etc. here in the server or in other members' DMs." },
			{ name: "**No Spam**", value: "This includes filling up the wall with needlessly long posts." },
			{ name: "**Use Correct Channels**", value: "And follow the guidelines listed in the channel descriptions." },
			{ name: "**Do Not Ping Roles or Specific People**", value: "- Please respect our time. \n- Only ping the Emergency role if there someone actively breaking the rules." },
			{ name: "**Inform Us**", value: "- If you have information about exploits or vulnerabilities in the game, message a developer directly. \n- Spreading this information or exploiting the game for personal gain may result in a ban from the game itself." },
		)
		.setFooter({text: "TL;DR: Be good.", iconURL: "https://i.imgur.com/VMjekcb.png"}),
	
	customRanksEmbed: new Discord.EmbedBuilder()
		.setTitle("**Roles**", "")
		.setColor("#2596be")
		.addFields(
			{ name: " ", value: "<@&700158172647915530>\n 📋 React to be pinged when we're looking for answers to polls by developers on a variety of game content.\n\n<@&700158112656654426>\n 🎮 React to gain acess to a channel where game nights and other fun discord events are going to be happening.\n\n<@&700158147771236393>\n 💰 React to be pinged when giveaways are going to be happening.\n\n<@&795153156140433428>\n 🎨 React to gain acess to exclusive contest channels for Art, in-game Decorating and more!\n\n<@&879122940833185853>\n 👀 React to get pinged whenever there's a new RoCitizens leak!" },
		),
	
	verifyEmbed: new Discord.EmbedBuilder()
		.setDescription("**Welcome to RoCitizens Community Discord!** \nPlease read the <#1016785714639286380> and then type `!verify`", "")
		.setImage("https://i.imgur.com/8BdiMcX.png")
		.setColor("#2596be"),
	
	// Moderation related embeds
	modEmbed1: new Discord.EmbedBuilder()
		.setTitle("Moderation should be done on a case by case basis", "")
		.setDescription("As moderators, you need to use your judgement to determine whether or not a person is:", "")
		.setColor("#2596be")
		.addFields(
			{ name: "⠀", value: "**Taking away from the server experience**" },
			{ name: "⠀", value: "**Putting members of the community at risk**" },
			{ name: "⠀", value: "**Making community members not feel welcome**" },
		),
	
	modEmbed2: new Discord.EmbedBuilder()
		.setColor("#2596be")
		.addFields(
			{ name: "Level 1", value: 'should serve as a "You need to read the rules"' },
			{ name: "Level 2", value: 'should serve as a "You need to stop doing this certain action"' },
			{ name: "Level 3", value: '"should serve as a "You should not be in the server anymore"' },
		),
	
	modEmbed3: new Discord.EmbedBuilder()
		.setColor("#2596be")
		.addFields(
			{ name: "Level 1 (Verbal Warning)", value: "-Pinging Firebrand \n-Links (deleted by bot) \n-Inappropriate language (deleted by bot) " },
			{ name: "Level 2 (Kick/Warn)", value: "-Pinging Emergency role \n-Evading Filter (Links/language) \n-Inappropriate conversation " },
			{ name: "Level 3 (Ban/Bban)", value: "-Harassment \n-Pornography \n-Catfishing" },
		),
	
	modEmbed4: new Discord.EmbedBuilder()
		.setTitle("This means we are no longer using a 3 warning system.", "")
		.setDescription("If a member violates a rule, action doesn't always need to be taken against them. A simple reminder to read the rules is sometimes better than warning them for an accident. Our end goal here is to make everyone feel equally welcome into the server. If a community member is causing another member to feel unwelcome, action should be taken against them.")
		.setColor("#2596be"),
	
	modEmbed5: new Discord.EmbedBuilder()
		.setTitle("Note From Firebrand", "")
		.setDescription('I take admin abuse extremely seriously. You have been given authority for the purpose of maintaining order in the game and/or Discord server. Any other use of this power is forbidden. \nIt is completely inappropriate to "date" or maintain any kind intimate relationship with members of the server, even if they are other moderators.\n\nDo not solicit favors of any kind from server members. \n\nDo not post inappropriate content.\n\nDo not use your authority to grant exceptions to the rules (unless approved by me)\n\nBreaking the rules will result in a ban from the server, game, and if applicable, a report to the police/law enforcement in your country. \n\nI am relying on you to watch yourselves and each other. If you receive evidence that a moderator is engaging in illicit behavior (even if you are not sure), forward it directly to me.')
		.setColor("#2596be"),
	
	// QA Related embeds
	qaEmbed1: new Discord.EmbedBuilder()
		.setTitle("Welcome to Quality Assurance Testing!", "")
		.setDescription("As QA Testers, you are expected to **not share information** about updates or testing discussed in the private channels to members outside of the QA group.", "")
		.setColor("#2596be"),
	qaEmbed2: new Discord.EmbedBuilder()
		.setTitle("Firebrand Games Group", "")
		.setURL('https://www.roblox.com/groups/4650816')
		.setDescription("Join this group and wait to be accepted and ranked.", "")
		.setColor("#2596be"),
	qaEmbed3: new Discord.EmbedBuilder()
		.setTitle("Test Place", "")
		.setURL('https://www.roblox.com/games/4074515213')
		.setDescription("This will be the place you will test in. It will open only when testing is needed.", "")
		.setColor("#2596be"),
	qaEmbed4: new Discord.EmbedBuilder()
		.setTitle("How to write a report", "")
		.setDescription("Reports should be **clear, concise,** and **contain as much information as possible** as to how to reproduce a glitch/bug.\nFor suggestions, they should be small **Quality of Life changes**, not overall game suggestions.", "")
		.setColor("#2596be"),
	qaEmbed5: new Discord.EmbedBuilder()
		.setTitle("Report Format", "")
		.addFields(
			{ name: "Title", value: "Title briefly describing the issue" },
			{ name: "Description", value: "A thorough description of the issue. Affect, severity, etc" },
			{ name: "Reproduce", value: "How to reproduce this issue" },
			{ name: "Notes", value: "Anything else we should know about" },
		)
		.setColor("#2596be"),
		
		
	// Contest related embeds
	contestEmbed1: new Discord.EmbedBuilder()
		.setThumbnail('https://i.imgur.com/dcBJATz.png')
		// https://i.imgur.com/Jtw5Cvb.png
		// https://i.imgur.com/dcBJATz.png
		.setTitle("Best Houses of 2021", "")
		.setDescription("Contest time! Since 2021 has officially come to an end, we want to look back and see some of your best work!", "")
		.setColor(0xFFC100)
		.addFields(
			{ name: "6 Winners will Be Chosen to receive", value: "-$25,000 in-game cash\n-Contest Winner Role in the Discord\n-Exclusive Paintbrush Trophy\n\n 3 Winners from **Custom House/Building Block** \n3 Winners from **Prebuilt House/Blueprint**" },
		),
	contestEmbed2: new Discord.EmbedBuilder()
		.setTitle("How To Enter", "")
		.setDescription("Submit `images` or `a video no longer than 2 minutes` to #submissions showcasing your best work from 2021! This can be specific rooms, a specific house, or even a custom build!\n(Keep in mind you are allowed 1 message submission, so compile all images into 1 message to submit)", "").setColor(0xFFC100)
		.setFooter({text: "If there's any more questions, reach out to a Contest Curator!"}),
	contestEmbed3: new Discord.EmbedBuilder()
		.setTitle("Details", "")
		.addFields(
			{ name: "**Which House?**", value: "You can submit any house or apartment.", inline: true },
			{ name: "**Can I use the Custom Colors Gamepass?**", value: "Yes you can! No points will be reduced if you do not own the gamepass.", inline: true },
			{ name: "**Can I submit a custom house?**", value: "Yes! There are two winning categories, custom and prebuilt house.", inline: true },
			{ name: "**How many times can I submit?**", value: "You can submit one time. Any extra submissions will not be counted.", inline: true },
			{ name: "**Can I submit for my friend?**", value: "No, you must be the creator of the content that you submit.", inline: true },
			{ name: "**When does the contest end?**", value: "Submissions will end on `Sunday, January 9th, 2022`.", inline: true },
		)
		.setColor(0xFFC100)
		.setFooter({text: "Good luck!"}),

	//Art
	contestEmbed4: new Discord.EmbedBuilder()
		.setThumbnail('https://i.imgur.com/tEh3Ken.png')
		.setTitle("RoCitizens Art Contest", "")
		.setDescription("As our community grows, we want to highlight the many talented artists!", "")
		.setColor(0xFFC100)
		.addFields(
			{ name: "Winners will Be Chosen to receive", value: "-$50,000 in-game cash\n-Contest Winner Role in the Discord\n-Exclusive Paintbrush Trophy\n\n Winners from **GFX, Screenshots, Edited Art** \nWinners from **Drawn, Digital, or Sculpted Art**" },
		),
	contestEmbed5: new Discord.EmbedBuilder()
		.setTitle("How To Enter", "")
		.setDescription("Submit an `image` to <#812100263560347698> showcasing your RoCitizens related art! This can be fan art, art of your in-game character, art of the map, game icon, and thumbnail, or anything else **RoCitizens Related**!", "")
		.setColor(0xFFC100)
		.setFooter({text: "By submitting an entry, you give us permission to use it for marketing purposes."}),
	contestEmbed6: new Discord.EmbedBuilder()
		.setTitle("Details", "")
		.addFields(
			{ name: "**What kind of art can I submit?**", value: "Any kind of art: Graphic art, Digital art, Drawn art, or anything else you can think of.", inline: true },
			{ name: "**Does it have to be RoCitizens Related?**", value: "Yes. All art should be RoCitizens Related.", inline: true },
			{ name: "**How many pieces of art can I submit?**", value: "You can submit one piece of art. Any extra submissions will not be counted.", inline: true },
			{ name: "**Can I submit my friend's art?**", value: "No, you must be the creator of the art that you submit.", inline: true },
			{ name: "**When does the contest end?**", value: "Submissions will end on `Wednesday, March 3rd, 2021`.", inline: true },
		)
		.setFooter({text: "If there's any more questions, reach out to a Contest Curator or Moderator!"})
		.setColor(0xFFC100),
	contestWinnerEmbed: new Discord.EmbedBuilder()
		.setTitle("Outdoor Build Contest Winners", "")
		.setThumbnail('https://i.imgur.com/zGihNSB.png') // https://i.imgur.com/RDpne64.png // https://i.imgur.com/zGihNSB.png
		.setDescription("Congratulations winners & thank you to everyone who submitted! \nThere were so many amazing submissions, and it was difficult to pick the winners. Our community is so talented, and we can't wait to see what you create in future contests!")
		.setFooter({text: "🥳🏆🥳"})
		.setColor(0xFFC100),
	contestVoteEmbed: new Discord.EmbedBuilder()
		.setTitle("It's Time To Vote!", "")
		.setThumbnail('https://i.imgur.com/zGihNSB.png')
		.setDescription("Vote for your favorite art! React to as many as you'd like! \n<#795156880283402260>\n<#817878682693271562>\nGood luck!")
		.setFooter({text: "Voting ends Monday, March 8th"})
		.setColor(0xFFC100),


//Outdoor
	contestEmbed7: new Discord.EmbedBuilder() 
		.setThumbnail('https://i.imgur.com/Jtw5Cvb.png')
		.setTitle("RoCitizens Outdoor Build Contest")
		.setDescription("Happy Summer! To celebrate Summer, we want to see your very best Outdoor Builds!")
		.setColor(0xFFC100)
		.addFields(
			{ name: "Winners will Be Chosen to receive", value: "-$30,000 in-game cash\n-Contest Winner Role in the Discord\n-Exclusive Paintbrush Trophy" },
		),
	contestEmbed8: new Discord.EmbedBuilder()
		.setTitle("How To Enter")
		.setDescription("Submit `images` or a `video no longer than 2 minutes` to <#1011944759490773082> showcasing your RoCitizens Outdoor Build! This Outdoor Build can be outside any house or the empty plot. As long as it was built in RoCitizens and is not located indoors, we will accept it!\n(Keep in mind you are only allowed 1 message per submission, so compile all images into 1 message to submit.)")
		.setColor(0xFFC100)
		.setFooter({text: "If there are any more questions, reach out to a Contest Curator or Moderator!"}),
	contestEmbed9: new Discord.EmbedBuilder()
		.setTitle("Details")
		.addFields(
			{ name: "**Which House?**", value: "You can submit any house, as long as the build is located outdoors.", inline: true },
			{ name: "**Can I use the Custom Colors Gamepass**", value: "Yes you can! No points will be reduced if you do not own the gamepass.", inline: true },
			{ name: "**Do I have to build in the backyard?**", value: "As long as it's outside, we will accept it.", inline: true },
			{ name: "**How many times can I submit?**", value: "You can submit one time. Any extra submissions will not be counted.", inline: true },
			{ name: "**Can I submit my friend's build?**", value: "No, you must be the creator of the content that you submit.", inline: true },
      { name: "When does the contest end?", value: "`Saturday, September 3rd, 2022`", inline: true}   
		)
		.setFooter({text: "Good Luck!"})
		.setColor(0xFFC100),

};