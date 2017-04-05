var app = (function() {
	function init(cb) {
		// Sets initial bot-message
		cb.createMsg(cb.bot, 'Hi! How may I help you?<br>Type in your question or select a topic below.');
		cb.createOpts([
			'The Product',
			'Users',
			'The Part-up Company'
		]);

		// When form has been submitted
		cb.form.addEventListener('submit', function(event) {
			cb.createConv(cb.input.value);

			cb.clearInput();

			event.preventDefault();
		});
	}

	return {
		init: init
	};

}) ();

app.init(chatbot);
