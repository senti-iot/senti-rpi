const raspiInfo = require('raspberry-info')
const rpiDetect = require('./rpi-detect')

// Get memory total
// 764720 kB
const rpiMemoryTotal = async () => {
	if (rpiDetect()) {
		return await raspiInfo.getMemoryTotal()
	}
}

module.exports = rpiMemoryTotal
