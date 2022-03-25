const request_event = (event) => require(`../events/${ event }`)

/**
 * 
 * @param {import('discord.js').Client} client 
 */
module.exports = client => {
    client.once('ready', () => request_event('ready')(client))
    client.on('messageCreate', (message) => request_event('message')(client, message))
}