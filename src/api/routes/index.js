/**
 * index.js
 * It contains all imports and exports them as a single object, in order to import it in a cleaner way
 */
const helloRouter = require('./hello.routes')

module.exports = {
    helloRouter
}