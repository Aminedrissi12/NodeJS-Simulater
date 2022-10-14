const express = require('express')
const kit = express.Router()
const Kits = require('../controller/controolerKits')

kit.route('/kits').get(Kits.getKits)

module.exports = kit
