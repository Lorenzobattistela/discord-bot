// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);

let canal = getCanal();
async function getCanal() {
    let message = 'Abiduda'
    servidor = await client.guilds.fetch('744336301041516565');
    await servidor.channels.fetch('791085718616408094').then(channel => channel.send(message)).catch(console.error);
    return;
}

