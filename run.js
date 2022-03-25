const { Client, Intents } = require('discord.js');
const path = require('path');
const services = require('./services')

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES
    ],
    partials: [
        'MESSAGE', 
        'REACTION', 
        'CHANNEL'
    ]
});

require('./scripts/events')(client);

if (!process.env.TOKEN)
    services.log('Error: token not found')
else
    client.login(process.env.TOKEN)
