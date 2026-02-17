const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const clientId = "1473099395082883288";
const guildId = "1473088685409960140";
const token = process.env.TOKEN;

const commands = [
  new SlashCommandBuilder()
    .setName('setup')
    .setDescription('Sends the smooch button!')
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );
    console.log('Successfully reloaded application (/) commands.');
  } catch (err) {
    console.error(err);
  }
})();
