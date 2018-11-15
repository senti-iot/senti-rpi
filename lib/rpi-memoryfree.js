const raspiInfo = require('raspberry-info')
const rpiDetect = require('./rpi-detect')

// Get memory free
// 315036 kB
const rpiMemoryFree = async () => {
	if (rpiDetect()) {
		return await raspiInfo.getMemoryFree()
	}
}

module.exports = rpiMemoryFree
