// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
	let forecastSentence = "";
	for (let i = 0; i < arr.length; i++) {
		forecastSentence += ` ... ${arr[i]}C in ${i + 1} days`;
	}
	return forecastSentence;
}

console.log(printForecast([17, 21, -5, 23]));
