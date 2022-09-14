// const channels = require('./../channels.json');
// const makerRoles = require('./../roles.json');
// const Discord = require('discord.js');
//
// var encouragement = ["You're great! 💾", "Thanks for everything you do! ⚡️", "✨ So exciting!! ✨", "Have a great day! 🌈"];
//
// module.exports = {
// 	name: 'clock',
// 	description: 'clock in and out control',
// 	execute(message, args) {
// 		var member = message.member;
// 		if(!member.roles.cache.has(process.env.DEV_TEAM_ID)
//       &&  !member.roles.cache.has(makerRoles.Student_Staff)
//       &&  !member.roles.cache.has(makerRoles.Code_Coach)) {
// 			message.channel.send("☠️ It seems that you don't have permission to use this command, sorry! ☠️"
// 				+	"\nIf you believe this message is a mistake, please contact a server admin. ⚡️");
// 			return;
// 		}
//
//     var i = Math.floor(Math.random() * Math.floor(encouragement.length));
//
//     var arg = args[0].toLowerCase();
//     var roleID = getRoleID(message);
//     var roleName = getRoleName(roleID);
//
//     if(!roleID || !roleName){
//       message.channel.send("🤖Hey, are you sure you're in the right channel❓");
//       return;
//     }
//     switch (arg) {
// 			case 'in':
//         message.member.roles.add(roleID);
//         console.log(message.author.nickname + " clocked in");
//         message.reply("🌞 You're ONLINE as " + roleName + ". "
//           + encouragement[i]);
// 				break;
// 			case 'out':
//         message.member.roles.remove(roleID);
//         console.log(message.author.nickname + " clocked out");
//         message.reply("\n🌙 You're OFFLINE as " + roleName + ". "
//           + encouragement[i]);
// 				break;
// 			default:
// 				message.reply("Need help? \n⏰Type '!clock in' to start your shift, or '!clock out' to end it!");
// 				return;
// 		}
// 	}
// };
//
// function getRoleID(message){
//   let channel = message.channel.id;
//
//   switch(channel){
//     case channels.Test_HERE:
//       return makerRoles.Student_Staff;
//     case channels.Clock_Channel:
//       return makerRoles.Student_Staff;
//     case channels.Code_Coaches_Channel:
//       return makerRoles.Code_Coach;
//     default:
//       message.reply("👀👀👀 Excuse me, but you shouldn't be using this command here!");
//       console.log(message.author.username + " attempted clock in through " + message.channel.name);
//       return;
//   }
// }
//
// function getRoleName(roleId){
//   switch (roleId) {
//     case makerRoles.Student_Staff:
//       return "Student Staff";
//     case makerRoles.Code_Coach:
//       return "a Code Coach";
//     default:
//       return;
//   }
// }
