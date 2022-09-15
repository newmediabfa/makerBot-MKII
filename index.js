const Discord = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const bot = new Discord.Client({
	intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.GuildMessageReactions],
 	// partials:[Discord.Partials.Message, Discord.Partials.Channel, Discord.Partials.Reaction],
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
