// var encouragement = ["You're great! 💾", "Thanks for everything you do! ⚡️", "✨ So exciting!! ✨", "Have a great day! 🌈"];
// const makerRoles = require('./../roles.json');
// const channels = require('./../channels.json');
//
// module.exports = {
// 	name: 'end',
// 	description: 'Clock out',
// 	execute(message, args) {
//     let name = message.member.nickname || message.author.username;
//     let i = Math.floor(Math.random() * Math.floor(encouragement.length));
//     let channel = message.channel.id;
//     let role = '';
//     let roleName = '';
//
//     switch(channel){
//       case channels.Test_HERE:
//         role = makerRoles.Student_Staff;
//         roleName = "tEXt Machina";
//         break;
//       case channels.Clock_Channel:
//         role = makerRoles.Student_Staff;
//         roleName = "Student Staff";
//         break;
//       case channels.Code_Coaches_Channel:
//         role = makerRoles.Code_Coach;
//         roleName = "a Code Coach";
//         break;
//       default:
//         message.channel.sends("👀👀👀 Excuse me, but you shouldn't be using this command here!");
//         console.log(message.author.username + " attempted clock in through " + message.channel.name);
//         return;
//     }
//
//     message.channel.send("💾 You're OFFLINE as " + roleName + ", "
//       + name + ". "
//       + encouragement[i]);
//
//     message.member.roles.remove(role);
//     console.log(message.author.username + " clocked out");
// 	}
// };
