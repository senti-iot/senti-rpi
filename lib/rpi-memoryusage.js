const raspiInfo = require('raspberry-info')
const rpiDetect = require('./rpi-detect')

// Get memory usage
// 56%
const rpiMemoryUsage = async () => {
	if (rpiDetect()) {
		return await raspiInfo.getMemoryUsage()
	}
}

module.exports = rpiMemoryUsage
