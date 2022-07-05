const users = require('./users')

module.exports = function(res) {
    res.writeHead(200, {
        'Content-Type': 'text/json'
    })
    res.end(JSON.stringify(users))
}