const rpiDetect = require('./rpi-detect')
const version = require('rpi-version')
//return current RPI model OR undefined

const rpiVersion = () => {
	if (rpiDetect()) {
		return version()
	}
}

module.exports = rpiVersion