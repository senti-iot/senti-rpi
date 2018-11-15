const raspiInfo = require('raspberry-info')
const rpiDetect = require('./rpi-detect')

// Get GPU temperature
// 39.7°C
const rpiGPUTemp = async () => {
	if (rpiDetect()) {
		return await raspiInfo.getGPUTemperature()
	}
}

module.exports = rpiGPUTemp
