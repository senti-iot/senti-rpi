const raspiInfo = require('raspberry-info')
const rpiDetect = require('./rpi-detect')

// Get current time and Host
const rpiCurrentTimeAndHost = async () => {
	if (rpiDetect()) {
		return await raspiInfo.getCurrentTimeAndHost()
	}
}

module.exports = rpiCurrentTimeAndHost