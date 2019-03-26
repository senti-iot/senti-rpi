#!/usr/bin/env node
'use strict'

/*
 * Copyright (c) 2016-2019 senti-iot contributors.
 * Copyright (c) 2016-2019 Christian Broberg.
 *
 * See LICENSE for more information
 */

// Import modules
const rpiDetect = require('./lib/rpi-detect')
const rpiTemp = require('./lib/rpi-temp')
const rpiSerial = require('./lib/rpi-serial')
const rpiVersion = require('./lib/rpi-version')
const rpiCurrentTimeAndHost = require('./lib/rpi-curtimehost')
const rpiGPUTemp = require('./lib/rpi-gputemp')
const rpiIP = require('./lib/rpi-ip')
const rpiMemoryTotal = require('./lib/rpi-memorytotal')
const rpiMemoryFree = require('./lib/rpi-memoryfree')
const rpiMemoryAvailable = require('./lib/rpi-memoryavailable')
const rpiMemoryUsage = require('./lib/rpi-memoryusage')

// Expose senti-rpi modules
module.exports.rpiDetect = rpiDetect
module.exports.rpiTemp = rpiTemp
module.exports.rpiSerial = rpiSerial
module.exports.rpiVersion = rpiVersion
module.exports.rpiCurrentTimeAndHost = rpiCurrentTimeAndHost
module.exports.rpiGPUTemp = rpiGPUTemp
module.exports.rpiIP = rpiIP
module.exports.rpiMemoryTotal = rpiMemoryTotal
module.exports.rpiMemoryFree = rpiMemoryFree
module.exports.rpiMemoryAvailable = rpiMemoryAvailable
module.exports.rpiMemoryUsage = rpiMemoryUsage