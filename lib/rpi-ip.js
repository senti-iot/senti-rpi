const raspiInfo = require('raspberry-info')
const rpiDetect = require('./rpi-detect')

// Get IP
// 00.000.000.00
const rpiIP = async () => {
	if (rpiDetect()) {
		return await raspiInfo.getIP()
	}
}

module.exports = rpiIP
