const Discord = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const PROGRAM_MSG_ID = '752931046852657333';
const PRONOUN_MSG_ID = '752931046244221028';
const YEAR_MSG_ID = '752931047489929256';

const roles = require('./roles.json');

const bot = new Discord.Client({
	intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.GuildMessageReactions],
 	partials:[Discord.Partials.Message, Discord.Partials.Channel, Discord.Partials.Reaction],
});

bot.commands = new Discord.Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	bot.commands.set(command.data.name, command);
}

bot.once('ready', () => {
	console.log('Ready!');
});

bot.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

bot.login(process.env.BOT_TOKEN);

// const bot = new Discord.Client({
//   partials: ['MESSAGE', 'REACTION']
// });
//
// //Welcome_Channel id
// const Welcome_Channel = '689959110237487106';
//
// //Clock_Channel id
// const Clock_Channel = '690768760134565949';
//
// //code coaches clock in and out
// const Code_Coaches_Channel = '691719188615790672';
//
// //Code coach id
// const Code_Coach = '692056319238209576';
//
// const archiveChannel = '690417204012908586';
//
// const Who_We_Are = '703305587445858354';
//
// const Start_Here = '691820126710005811';
//
// const Channel_Listing = '727379526660784208';
//
// const Test_HERE = '692054748274098276'
//
// // this is the id of the msg the bot sends to react to

//
//
//
// const timer = 15000;
//
// var answers = ["I AM.", "tin foil!", "this is.", "everything by anyone 🌈", "the intersection of art and technology ⚡️", "love ❤️", "imagination set free", "life itself", "creativity with technology", "community ❣️", "exploration & experimentation...", "🤖", "A community that brings creatives of the future together!", "It's a program that is based on understanding the relationship between art and technology, but I usually just say; It's a fun time where memes are somehow school work and video games are required readings", "🎧🎮📱🕹💻📸💾📺🎙🎛⚙️🔧🔩🔨✏️🖌🖍🔊🤖👾", "your creative expression: amplified!", ":robot:⚡️:art::computer::joystick::hammer::family_mwgb::heart:", "family :heart: Real world or virtual world", "a mystery :eyes:", "O.o", "the hot glue that holds my life together :exploding_head::exploding_head::exploding_head:", "collision of art and tech", "this wild and wacky community where you can create and invent to your hearts content!! :frog: :partying_face: :tools:", "a very philosophical concept", "a dynamic palette of paints that we can work with to make beautiful gestures that feel alive and responsive to audiences or to itself as a material", "a lot!", "art, technology, and being able to interact through them", "interdisciplinary artistry using creative practises/processes", "THE FUTURE!!"];
// var ind = 0;
//
//
// bot.on('ready', () => {
//   console.log("Logged in as " + bot.user.tag);
// });
//
// bot.on('guildMemberAdd', member => {
//   member.send("Welcome to the New Media server, "
//     + member.user.username +
//     "! Read the <#"
//     + Welcome_Channel +
//     "> channel to begin. Please note that you will not be able to access the full Discord until you have responded on the <#"
//     + Welcome_Channel +
//     "> channel. Have fun 🤖");
//
//   console.log(member.user.username + " has joined the server!");
// });
//
bot.on('messageReactionAdd', async (reaction, user) => {
	if(!reaction.partial) return;

  let applyRole = async () => {
    let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
    let emojiName = reaction.emoji.name;
    console.log(emojiName);
    let role;
    if(emojiName === '⚡'){
      role = roles.New_Media;
    }
    if(emojiName === '⚽'){
      role = roles.Sport_Media;
    }
    if(emojiName === '🎥'){
      role = roles.Media_Prod;
    }
    if(emojiName === '🎙'){
      role = roles.Masters;
    }
    if(emojiName === '🐏'){
      role = roles.Not_In_RTA;
    }
    if(emojiName === '❤️'){
      role = roles.Other;
    }
    if(emojiName === '🧡'){
      role = roles.Any;
    }
    if(emojiName === '💛'){
      role = roles.None;
    }
    if(emojiName === '💚'){
      role = roles.They;
    }
    if(emojiName === '💙'){
      role = roles.He;
    }
    if(emojiName === '💜'){
      role = roles.She;
    }
    if(emojiName === '1️⃣'){
      role = roles.First;
    }
    if(emojiName === '2️⃣'){
      role = roles.Second;
    }
    if(emojiName === '3️⃣'){
      role = roles.Third;
    }
    if(emojiName === '4️⃣'){
      role = roles.Fourth;
    }
    if(emojiName === '#️⃣'){
      role = roles.Beyond;
    }
    if(emojiName === '💾'){
      role = roles.Old_Median;
    }
    if(emojiName === '⏳'){
      role = roles.Alumni;
    }

    try{
      if (role && member){
        console.log("Role and member found");
        await member.roles.add(role);
      }
    }
    catch(err){
      console.log(err);
    }
  }
  if (reaction.message.partial){
    try{
      let msg = await reaction.message.fetch();
      if(msg.id === PROGRAM_MSG_ID || reaction.message.id === PRONOUN_MSG_ID || reaction.message.id === YEAR_MSG_ID){
        console.log("Cached.");
        applyRole();
      }
    }
    catch(err){
      console.log(err);
    }
  }
  else{
    //console.log("Not a partial.");
    if(reaction.message.id === PROGRAM_MSG_ID || reaction.message.id === PRONOUN_MSG_ID || reaction.message.id === YEAR_MSG_ID){
      applyRole();
    }
  }
});
//
// //remove reactions
// bot.on('messageReactionRemove', async (reaction, user) => {
//   let removeRole = async () => {
//     let emojiName = reaction.emoji.name;
//     console.log(emojiName);
//     let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
//     let role;
//     if(emojiName === '⚡'){
//       role = makerRoles.New_Media;
//     }
//     if(emojiName === '⚽'){
//       role = makerRoles.Sport_Media;
//     }
//     if(emojiName === '🎥'){
//       role = makerRoles.Media_Prod;
//     }
//     if(emojiName === '🎙'){
//       role = makerRoles.Masters;
//     }
//     if(emojiName === '🐏'){
//       role = makerRoles.Not_In_RTA;
//     }
//     if(emojiName === '❤️'){
//       role = makerRoles.Other;
//     }
//     if(emojiName === '🧡'){
//       role = makerRoles.Any;
//     }
//     if(emojiName === '💛'){
//       role = makerRoles.None;
//     }
//     if(emojiName === '💚'){
//       role = makerRoles.They;
//     }
//     if(emojiName === '💙'){
//       role = makerRoles.He;
//     }
//     if(emojiName === '💜'){
//       role = makerRoles.She;
//     }
//     if(emojiName === '1️⃣'){
//       role = makerRoles.First;
//     }
//     if(emojiName === '2️⃣'){
//       role = makerRoles.Second;
//     }
//     if(emojiName === '3️⃣'){
//       role = makerRoles.Third;
//     }
//     if(emojiName === '4️⃣'){
//       role = makerRoles.Fourth;
//     }
//     if(emojiName === '#️⃣'){
//       role = makerRoles.Beyond;
//     }
//     if(emojiName === '💾'){
//       role = makerRoles.Old_Median;
//     }
//     if(emojiName === '⏳'){
//       role = makerRoles.Alumni;
//     }
//
//     try{
//       if (role && member){
//         console.log("Role and member found");
//         await member.roles.remove(role);
//       }
//     }
//     catch(err){
//       console.log(err);
//     }
//   }
//   if (reaction.message.partial){
//     try{
//       let msg = await reaction.message.fetch();
//       if(msg.id === PROGRAM_MSG_ID || reaction.message.id === PRONOUN_MSG_ID || reaction.message.id === ){
//         console.log("Cached.");
//         removeRole();
//       }
//     }
//     catch(err){
//       console.log(err);
//     }
//   }
//   else{
//     //console.log("Not a partial.");
//     if(reaction.message.id === Program_msg_id || reaction.message.id === PRONOUN_MSG_ID || reaction.message.id === YEAR_MSG_ID){
//       removeRole();
//     }
//   }
// });
//
// bot.on('message', async (message) =>
// {
//   if(message.author.bot)
//     return;
//
//   if (message.channel.id == Welcome_Channel){
//     if (message.content.toLowerCase().startsWith('new media is')){
//       bot.channels.cache.get(archiveChannel).send(message.content); //send response to wth is new media
//       console.log("Message sent to what-the-heck-is-new-media?");
//
//       message.member.roles.add(makerRoles.New_Median);
//       newUSER(message);
//
//     }
//     else{
//       if(message.author.bot) return;
//       else{
//         message.reply("Read the instructions again. You must respond exactly as indicated.").then(sentMessage => {sentMessage.delete({timeout : timer})});
//         message.delete({timeout : timer});
//       }
//     }
//   }
//
//   const prefix = "/";
//   if(message.content.startsWith(prefix)){
//     const args = message.content.slice(prefix.length).trim().split(/ +/);
//     const commandName = args.shift().toLowerCase();
//
//     if (!bot.commands.has(commandName))
//       return;
//     const command = bot.commands.get(commandName);
//
//     try {
//     	command.execute(message, args);
//     } catch (error) {
//     	console.error(error);
//     	message.reply('whoops 🤷🏽‍♀️that command didnt work, sorry.');
//     }
//   }
//   else {
//     if (message.content.toLowerCase().startsWith("what the heck is")){
//       ranMATH();
//       console.log(ind);
//       message.reply("it's is " + answers[ind]);
//     }
//     if (message.content.toLowerCase().startsWith("i hate")){
//       message.reply("👀 no you don't. lol 🤣");
//     }
//   }
// });
//
// function newUSER(message){
//   console.log("A new friend has arrived!");
//
//   message.channel.send("⚡️ Welcome to the New Media community! "
//     + "You now have access to the entire Discord. Visit the <#"
//     + Who_We_Are
//     + "> channel to tell us more about you & go play! ⚡️").then(sentMessage => {sentMessage.delete({timeout : timer})});
//   message.delete({timeout : timer});
//
//
//   console.log("New Median " + message.author.username + " added to the party");
//   message.member.send("You have successfully joined the New Media community, "
//     + message.author.username
//     + "! Please tell us more about yourself on the <#"
//     + Who_We_Are
//     + "> channel. Feeling lost? Visit the<#"
//     + Start_Here
//     + "> channel. To get an overview of the space, visit the <#"
//     + Channel_Listing + ">");
// }
//
// function ranMATH(){
//   var min = 0;
//   var max = answers.length;
//   ind = Math.floor(Math.random() * (+max - +min)) + +min;
//   if (ind == answers.length){
//     ind = 0;
//   }
// }
//
// bot.login(process.env.BOT_TOKEN);
