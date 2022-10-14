const Express = require('express')
const App = Express()
const cors = require('cors')
const kits = require('./Router/kits')

App.use(Express.json())
App.use(cors())

App.use('/api/v1', kits)

module.exports = App
