require('dotenv').config();
const Hapi = require('@hapi/hapi');
const { Client, GatewayIntentBits } = require('discord.js');
const aiCommand = require('./src/commands/aiCommand');

// Konfigurasi port
const PORT = process.env.PORT || 8080;

// Inisialisasi bot Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!ai ')) {
    await aiCommand.execute(message);
  }
});

// Fungsi untuk menjalankan bot Discord
const startDiscordBot = async () => {
  try {
    await client.login(process.env.DISCORD_BOT_TOKEN);
  } catch (err) {
    console.error('Failed to login Discord bot:', err);
  }
};

// Inisialisasi server Hapi.js
const startServer = async () => {
  const server = Hapi.server({
    port: PORT,
    host: '0.0.0.0', // Penting untuk Cloud Run
  });

  // Endpoint health check
  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return { status: 'Server is running!', bot: 'Discord bot is ready' };
    },
  });

  // Menjalankan server
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

const init = async () => {
  await startServer();
  await startDiscordBot();
};

init();
