var utils = (function() {
	// Returns AM / PM time format
	function formatTime(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'PM' : 'AM';
		var strTime;

		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		strTime = hours + ':' + minutes + ' ' + ampm;

		return strTime;
	}

	// Sets input to lowercase and removes special characters and spaces.
	function cleanText(text) {
		return text.toLowerCase().replace(/[ ,.;:!?@#$%^&*<>\(\)\[\]\{\}'"]/g,'').replace(/-/g, '');
	}

	// Checks if item consists in chosen array
	var checkArray = function(item, arr) {
		if (arr.indexOf(item) !== -1) {
			return true;
		} else {
			return false
		}
	};

	return {
		formatTime: formatTime,
		cleanText: cleanText,
		checkArray: checkArray
	};

}) ();
