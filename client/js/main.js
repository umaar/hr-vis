/* global d3, document */

document.addEventListener('DOMContentLoaded', start);

function start() {
	d3.csv('data/sample.csv', (error, rawData) => {
		if (error) {
			console.error('There was an error:', error);
			return;
		}

		console.log(rawData);
	});
}
