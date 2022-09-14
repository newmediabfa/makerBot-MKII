const Discord = require('discord.js');

module.exports = {
	data: new Discord.SlashCommandBuilder()
		.setName('beep')
		.setDescription('Replies with Boop!'),
	async execute(interaction) {
		await interaction.reply('Boop!');
	},
};
