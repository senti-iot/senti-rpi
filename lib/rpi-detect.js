const detect = require('detect-rpi')

const rpiDetect = () => {
	if (detect()) {
		return true
	} else {
		return false
	}
}

module.exports = rpiDetect
