const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
	const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
	console.log(`The total is: ${result}`);
}

// sendPaymentRequestToApi(28, 2)

module.exports = sendPaymentRequestToApi;