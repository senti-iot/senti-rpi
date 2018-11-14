const exec = require('child_process').exec
const rpiDetect = require('./rpi-detect')

const rpiSerial = () => {
	if (rpiDetect()) {
		exec('cat /proc/cpuinfo | grep Serial', (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`)
				return
			} else {
				return stdout // this is your RPI serial number
			}
		})
	}
}

module.exports = rpiSerial

// rpiSerial()