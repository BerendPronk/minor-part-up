var utils = (function() {
	// Returns AM / PM time format
	var formatTime = function(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'PM' : 'AM';
		var strTime;

		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		strTime = hours + ':' + minutes + ' ' + ampm;

		return strTime;
	};

	// Sets input to lowercase and removes special characters and spaces.
	var cleanText = function(text) {
		return text.toLowerCase().replace(/[ ,.;:!?@#$%^&*<>\(\)\[\]\{\}'"]/g,'').replace(/-/g, '');
	};

	return {
		formatTime: formatTime,
		cleanText: cleanText
	};

}) ();
