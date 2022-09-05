


fetch('https://www.freecodecamp.dev/curriculum-data/v1/available-superblocks.json').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
