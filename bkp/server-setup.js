// const channels = require('./../channels.json');
//
// const Discord = require('discord.js');
//
// module.exports = {
// 	name: 'server-setup',
// 	description: 'server setup',
// 	execute(message, args) {
// 		var member = message.member;
// 		if(!member.roles.cache.has(process.env.DEV_TEAM_ID)) {
// 			message.channel.send("☠️ It seems that you don't have permission to use this command, sorry! ☠️"
// 				+	"\nIf you believe this message is a mistake, please contact a server admin. ⚡️");
// 			return;
// 		}
// 		if(!args.length)
// 			message.channel.send("🤖 Beep Boop! Command not recognized. For a list of available commands you can type !server-setup help\nHave fun! 🌈");
// 			return;
//
// 		var arg = args[0].toLowerCase();
// 		switch (arg) {
// 			case 'help':
// 				printAvailableCommands(message);
// 				break;
// 			case 'self-id':
// 				selfId(message);
// 				break;
// 			default:
// 				message.channel.send("🤖 Beep Boop! Command not recognized. For a list of available commands you can type !server-setup help\nHave fun! 🌈");
// 				return;
// 		}
// 	}
// };
//
// function selfId(message){
// 	var channel = message.channel;
// 	message.delete({timeout : 5});
// 	const embeddedMsgPronoun = new Discord.MessageEmbed()
// 		.setColor(0xe74c3c)
// 		.setTitle("What are your preferred pronouns?")
// 		.setDescription('❤️ Other Pronouns \n\n 🧡 Any Pronouns \n\n 💛 None/ Use Name \n\n 💚 They/ Them \n\n 💙 He/ Him \n\n 💜 She/ Her')
// 		.setThumbnail('https://i.imgur.com/s5YDmEK.png');
//
// 		channel.send(embeddedMsgPronoun).then(
// 			async message =>{
// 				await message.react("❤️");
// 				await message.react('🧡');
// 				await message.react('💛');
// 				await message.react('💚');
// 				await message.react('💙');
// 				await message.react('💜');
// 			})
// 			const embededMsgProgram = new Discord.MessageEmbed()
// 				.setColor(0x2ecc71)
// 				.setTitle("What program are you in?")
// 				.setDescription('⚡ New Media \n\n ⚽️ Sport Media \n\n 🎥 Media Production \n\n 🎙 Masters of Media Production \n\n 🐏 Not in RTA!')
// 				.setThumbnail('https://i.imgur.com/MlNC1EE.jpg');
// 			channel.send(embededMsgProgram).then(
// 				async message =>{
// 					await message.react("⚡");
// 					await message.react('⚽');
// 					await message.react('🎥');
// 					await message.react('🎙');
// 					await message.react('🐏');
// 				})
// 				const embededMsgYear = new Discord.MessageEmbed()
// 					.setColor(0x3498db)
// 					.setTitle("What year are you in?")
// 					.setDescription('1️⃣ First Year \n\n 2️⃣ Second Year \n\n 3️⃣ Third Year \n\n 4️⃣ Fourth Year \n\n #️⃣ Fifth Year and Beyond! \n\n 💾 Old Median (New Media Alum) \n\n ⏳Ryerson Alumni')
// 					.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/3/37/Clock.gif');
// 				channel.send(embededMsgYear).then(
// 					async message =>{
// 						await message.react("1️⃣");
// 						await message.react('2️⃣');
// 						await message.react('3️⃣');
// 						await message.react('4️⃣');
// 						await message.react('#️⃣');
// 						await message.react('💾');
// 						await message.react('⏳');
// 					})
// }
//
// function printAvailableCommands(message){
// 	message.channel.send("⚡️ Welcome to the server-setup command list ⚡️\n"
// 		+ "\n\t 🔹 'help': displays a list of all available commands."
// 		+ "\n\t 🔹 'self-id': setup self-id reaction messages.")
// }
