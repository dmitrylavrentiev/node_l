const EventEmitter = require('events')

class Loger extends EventEmitter {
    log(msg) {
        this.emit('message', msg + ' ' + Date.now())
    }
}

const logger = new Loger()

logger.on('message', data => {
    console.log(data)
})

logger.log('Hello')
logger.log('Hello1')
logger.log('Hello2')
logger.log('Hello3')
logger.log('Hello4')