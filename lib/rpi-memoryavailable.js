const raspiInfo = require('raspberry-info')
const rpiDetect = require('./rpi-detect')

// Get memory available
// 200012 kB
const rpiMemoryAvailable = async () => {
	if (rpiDetect()) {
		return await raspiInfo.getMemoryAvailable()
	}
}

module.exports = rpiMemoryAvailable
