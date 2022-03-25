const services = require('../services');

/**
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports = async (client, message) => {
    if (message.author.bot) return;

    await message.channel.send('pong');
    services.log('message');
};
