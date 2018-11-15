const rpiDetect = require('./rpi-detect')
const version = require('rpi-version')
//return current RPI model OR undefined

const rpiVersion = async () => {
	if (rpiDetect()) {
		return await version()
	}
}

module.exports = rpiVersion