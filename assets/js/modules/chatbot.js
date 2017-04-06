var chatbot = (function() {
	// DOM-variables
	var chat = document.querySelector('#chat');
	var form = document.querySelector('#input #form');
	var input = document.querySelector('#input input[type="text"]');

	// User-types
	var user = {
		name: 'Berend Pronk',
		avatar: './assets/img/user.jpg'
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

		buttons.forEach(function(button) {
			button.disabled = true;
		});
	}

	// Creates a conversation between human user and bot
	function createConv(question) {
		if (question !== '') {
			createMsg(user, question);

			setTimeout(function() {
				createMsg(bot, answers.check(utils.cleanText(question)));


				// check on keywords if not understood, first
				// createOpts();
			}, 250);
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

		time.classList.add('time');
		time.insertAdjacentHTML('afterbegin', utils.formatTime(new Date()));

		name.innerText = user.name;
		name.classList.add('name');
		name.appendChild(time);

		text.classList.add('msg');

		if (user !== bot) {
			text.innerText = question;
			msg.setAttribute('data-type', 'sent');
		} else {
			text.insertAdjacentHTML('afterbegin', question);
			msg.setAttribute('data-type', 'received');
		}

		textCtn.classList.add('text-ctn');
		textCtn.appendChild(name);
		textCtn.appendChild(text);

		msg.appendChild(img);
		msg.appendChild(textCtn);

		chat.appendChild(msg);

		// Guides user to latest post
		msg.scrollIntoView();
	}

	// Creates list of options for user to choose from
	function createOpts(options) {
		var choiceListCtn = document.createElement('li');
		var choiceList = document.createElement('ul');

		options.map(function(option) {
			var choiceCtn = document.createElement('li');
			var choice = document.createElement('button');

			choice.insertAdjacentHTML('afterbegin', option);

			// Checks if final-possible options has been reached
			if (answers.options(option).final === true) {
				choice.addEventListener('click', function() {
					createConv(option);
				});
			} else  {
				choice.addEventListener('click', function() {
					createMsg(bot, answers.options(option).response);
					createOpts(answers.options(option).followups);
				});
			}

			choiceCtn.appendChild(choice);
			choiceList.appendChild(choiceCtn);
		});

		choiceListCtn.setAttribute('data-type', 'choices');

		choiceListCtn.appendChild(choiceList);
		chat.appendChild(choiceListCtn);

		// Guides user to latest options
		choiceListCtn.scrollIntoView();
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
