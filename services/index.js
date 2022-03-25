const config = require('../config.json')

const fileLog = require('./fileLog')

module.exports = {
    config,
    log: fileLog
}