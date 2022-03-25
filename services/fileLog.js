const fs = require('fs')

/**
 * @param {String} log 
 */
module.exports = (log) => {
    console.log(log)

    var date = new Date()
    fs.createWriteStream('log.txt', {
        flags: 'a'
    }).write(`${date.toISOString()}, ${log}\n`)
}