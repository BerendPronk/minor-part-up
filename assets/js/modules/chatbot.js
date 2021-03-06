var chatbot = (function() {
	// DOM-variables
	var chat = document.querySelector('#chat');
	var form = document.querySelector('#input #form');
	var input = document.querySelector('#input input[type="text"]');

	// User-types
	var user = {
		name: 'Username',
		avatar: './assets/img/user.png'
	};
	var bot = {
		name: 'Part-up Bot',
		avatar: './assets/img/bot.jpg',
	};

	// Clears input and applies focus on it
	function clearInput() {
		input.value = '';
		input.focus();
	}

	// Disables option-button history
	function lockOpts() {
		var buttons = document.querySelectorAll('li[data-type="choices"] button');

		// For-loop to support older browsers
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].disabled = true;
		}
	}

	// Sets a temporary loader to set the illusion that the bot is thinking
	function setLoader() {
		var loaderCtn = document.createElement('li');
		var loader = document.createElement('img');

		loader.src = './assets/img/load.gif';

		loaderCtn.appendChild(loader);

		// Applies loader when users message has appeared
		setTimeout(function() {
			chat.appendChild(loaderCtn);
		}, 500)

		// Removes loader
		setTimeout(function() {
			chat.removeChild(loaderCtn);
		}, 1250);
	}

	// Creates a conversation between human user and bot
	function createConv(question) {
		if (question !== '') {
			var cleanQuestion = utils.cleanText(question);
			createMsg(user, question);

			// Sets a temporary loader
			setLoader();

			// Sets timeout before returning an reply
			setTimeout(function() {
	            // Checks if final-possible options has been reached, returns answer with or without follow-up questions
				if (answers.options(cleanQuestion).final === true) {
					createMsg(bot, answers.check(cleanQuestion).response);

					// When no answer is found, check question on keywords to suggest to user
					if (answers.check(cleanQuestion).checkKeyword === true) {
						var splitQuestion = question.split(' ');

						// Loops through every word in given question
						for (var i = 0; i < splitQuestion.length; i++) {
							var cleanWord = utils.cleanText(splitQuestion[i]);

							// Checks if word can be used as a keyword
							if (utils.checkArray(cleanWord, answers.keyword.list)) {
								// Sets timeout to provide a delay on the next bot-message
								setTimeout(function() {
									createMsg(bot, 'Maybe you were looking for this?');
								}, 750)
								// Sets timeout to provide a delay on keyword-options
								setTimeout(function() {
									createOpts(answers.keyword.suggest(cleanWord));
								}, 1250)

								return false;
							}
						}
					}
				} else {
					createMsg(bot, answers.options(cleanQuestion).response);
					createOpts(answers.options(cleanQuestion).followups);
				}
			}, 1250);
		}
	}

	// Creates a speech-bubble containing user, message and time of posting
	function createMsg(user, question) {
		var msg = document.createElement('li');
		var img = document.createElement('img');
		var textCtn = document.createElement('div');
		var name = document.createElement('p');
		var text = document.createElement('p');
		var time = document.createElement('span');

		// Disables currently active buttons
		lockOpts();

		img.src = user.avatar;

		time.className = 'time';
		time.insertAdjacentHTML('afterbegin', utils.formatTime(new Date()));

		name.innerText = user.name;
		name.className = 'name';
		name.appendChild(time);

		text.className = 'msg';

		if (user !== bot) {
			text.innerText = question;
			msg.setAttribute('data-type', 'sent');
		} else {
			text.insertAdjacentHTML('afterbegin', question);
			msg.setAttribute('data-type', 'received');
		}

		textCtn.className = 'text-ctn';
		textCtn.appendChild(name);
		textCtn.appendChild(text);

		msg.className = 'out-frame';
		msg.appendChild(img);
		msg.appendChild(textCtn);

		chat.appendChild(msg);

		// Removes classname after 200 milliseconds
		setTimeout(function() {
			msg.className = '';
		}, 200);

		// Guides user to latest post when animation has finished
		setTimeout(function() {
			msg.scrollIntoView();
		}, 400);
	}

	// Creates list of options for user to choose from
	function createOpts(options) {
		var choiceListCtn = document.createElement('li');
		var choiceList = document.createElement('ul');

		options.map(function(option) {
			var choiceCtn = document.createElement('li');
			var choice = document.createElement('button');
			var cleanOption = utils.cleanText(option);

			choice.insertAdjacentHTML('afterbegin', option);

			// Creates conversation when option is selected
			choice.addEventListener('click', function() {
				createConv(option);
			});

			choiceCtn.appendChild(choice);
			choiceList.appendChild(choiceCtn);
		});

		choiceListCtn.className = 'out-frame';
		choiceListCtn.setAttribute('data-type', 'choices');

		choiceListCtn.appendChild(choiceList);
		chat.appendChild(choiceListCtn);

		// Removes classname after waiting for the bot-message to arrive plus some small delay, 700 milliseconds
		setTimeout(function() {
			choiceListCtn.className = '';
		}, 700);
	}

	return {
		chat: chat,
		form: form,
		input: input,
		user: user,
		bot: bot,
		clearInput: clearInput,
		lockOpts: lockOpts,
		createConv: createConv,
		createMsg: createMsg,
		createOpts: createOpts
	};

}) ();
