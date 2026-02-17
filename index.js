const { Client, GatewayIntentBits, ButtonBuilder, ButtonStyle, ActionRowBuilder, Events } = require('discord.js');

const mariaId = "998980918146519060";
const bfId = "982511917753057371";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {

  // Button click
  if (interaction.isButton() && interaction.customId === 'smooch') {
    if (interaction.user.id === mariaId) {
      await interaction.reply(`💋 <@${mariaId}> gave <@${bfId}> a smooch!`);
    } else if (interaction.user.id === bfId) {
      await interaction.reply(`💋 <@${bfId}> gave <@${mariaId}> a smooch!`);
    } else {
      await interaction.reply({ content: "This button isn't for you 👀", ephemeral: true });
    }
  }

  // Slash command /setup
  if (interaction.isChatInputCommand() && interaction.commandName === 'setup') {
    const button = new ButtonBuilder()
      .setCustomId('smooch')
      .setLabel('💋 Send Smooch')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(button);

    await interaction.reply({
      content: "Click below to send a smooch 💕",
      components: [row]
    });
  }
});

client.login(process.env.TOKEN);
