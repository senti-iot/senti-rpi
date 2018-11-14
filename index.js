#!/usr/bin/env node
'use strict'

/*
 * Copyright (c) 2018-2018 senti-rpi.js contributors.
 * Copyright (c) 2018-2018 Christian Broberg.
 *
 * See LICENSE for more information
 */

// Import modules
const rpiDetect = require('./lib/rpi-detect')
const rpiTemp = require('./lib/rpi-temp')
const rpiSerial = require('./lib/rpi-serial')
const rpiVersion = require('./lib/rpi-version')

// Expose senti-rpi modules
module.exports.rpiDetect = rpiDetect
module.exports.rpiTemp = rpiTemp
module.exports.rpiSerial = rpiSerial
module.exports.rpiVersion = rpiVersion
