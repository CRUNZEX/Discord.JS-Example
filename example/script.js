const { Client, Intents } = require('discord.js');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.login(services.config.TOKEN)