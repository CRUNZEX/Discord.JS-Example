/* eslint-disable global-require */
// eslint-disable-next-line global-require
// eslint-disable-next-line import/no-dynamic-require
const requestEvent = (event) => require(`../events/${event}`);

/**
 *
 * @param {import('discord.js').Client} client
 */
module.exports = (client) => {
    client.once('ready', () => requestEvent('ready')(client));
    client.on('messageCreate', (message) => requestEvent('message')(client, message));
};
