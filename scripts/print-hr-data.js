var csv = require('fast-csv');

csv
	.fromPath('20160811_081231_23.Heart.csv')
	.on('data', function (data) {
		const [,, hrRaw, timestampStr] = data;
		const date = (new Date(parseInt(timestampStr, 10))).toTimeString();
		const time = date.split(' ')[0];
		const hr = parseInt(hrRaw, 10);

		console.log(time, ', ', hr);
	})
	.on('end', function () {
		console.log('done');
	});
