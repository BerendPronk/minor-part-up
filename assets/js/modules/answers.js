var answers = (function() {
	// Retrieves options based on input-question
	function options(option) {
		switch (option) {
			// Categories
			case utils.cleanText('The Product'):
				return {
					response: 'Our product sure has a lot of different terminology to get used to. That\'s why you are faced with some (more specific) topics.',
					followups: [
						'Part-ups',
						'Rating',
						'Activities',
						'Tribes',
						'Mail'
					],
					final: false
				}
			break;
			case utils.cleanText('Users'):
				return {
					response: 'I have put everything related to users of part-up, including your own (future) account, in the following topics.',
					followups: [
						'Account',
						'Uppers',
						'Partners',
						'Supporters'
					],
					final: false
				}
			break;
			case utils.cleanText('The Part-up Company'):
				return {
					response: 'What a pleasure to see that you are interested in our company. What do you want to know more about?',
					followups: [
						'Our Product',
						'Miscellaneous'
					],
					final: false
				}
			break;
			// Sub-categories
			case utils.cleanText('Part-ups'):
				return {
					response: 'Even in this sub-category there are just too many questions to overwhelm you with. Where does your initial question lie?',
					followups: [
						'Part-ups in general',
						'Using part-ups'
					],
					final: false
				}
			break;
			case utils.cleanText('Partners'):
				return {
					response: 'Partners play a big role here with part-up. On which of the following topics do you wish to receive more information?',
					followups: [
						'Partners in general',
						'Partners in my part-up'
					],
					final: false
				}
			break;
			// Question responses
			case utils.cleanText('Part-ups in general'):
				return {
					response: 'Ahh, at last, some questions! Select one to get an answer from me.',
					followups: [
						'What is a part-up?',
						'Can I use Part-up in my organization?',
						'What is the maximum duration of a part-up?',
						'Can I pay people to work on my part-up?',
						'Can I earn money working in part-ups?',
						'Should I use Part-up if I have my team already?'
					],
					final: false
				}
			break;
			case utils.cleanText('Using part-ups'):
				return {
					response: 'Are you a new user, or do you just want to know more about using part-ups? I will provide you with answers!',
					followups: [
						'How do I join a part-up?',
						'Can I share part-ups on social media',
						'Why do I have to add a picture to my part-up?',
						'How do I keep an overview?',
						'How do I settle an argument with my partners within a part-up?',
						'Can I copy part-ups?'
					],
					final: false
				}
			break;
			case utils.cleanText('Rating'):
				return {
					response: 'Yeah, what about our rating system? I\'d like to tell you!',
					followups: [
						'How can I rate the partners in my part-up?',
						'Why do I have to rate my partners?',
						'Who can see my rating?',
						'What happens if I get a bad rating'
					],
					final: false
				}
			break;
			case utils.cleanText('Activities'):
				return {
					response: 'Part-up is built on activities, it\'s one of the key functions of Part-up. These questions will provide help, if needed.',
					followups: [
						'What is an activity?',
						'Why can I only invite uppers to activities and not to my part-up?',
						'How can I change the order of my activities?'
					],
					final: false
				}
			break;
			case utils.cleanText('Tribes'):
				return {
					response: 'I understand that this might be confusing at first, but we\'ll get there together!',
					followups: [
						'What is a tribe?',
						'How do I get a tribe?',
						'Do I need a tribe?',
						'How many uppers can join a tribe?',
						'How many part-ups can I start within a tribe?'
					],
					final: false
				}
			break;
			case utils.cleanText('Mail'):
				return {
					response: 'Troubles with your mailing program? We can fix it together!',
					followups: [
						'Change the mail program'
					],
					final: false
				}
			break;
			case utils.cleanText('Account'):
				return {
					response: 'Everything there is to know about your personal account, is listed in the topics below. Hope it helps!',
					followups: [
						'How do I login to Part-up?',
						'Should I login using Facebook and LinkedIn?',
						'What is that number added to my profile picture?',
						'Why should I add my social profiles and phone number?',
						'Why do I need a premium account for a private part-up?',
						'Can I delete my account?'
					],
					final: false
				}
			break;
			case utils.cleanText('Uppers'):
				return {
					response: 'Have you seen the word \'upper\' appear, but don\'t know what it is? Maybe this will help.',
					followups: [
						'What is an upper?',
						'How can I invite other uppers to my part-up?',
						'How many uppers can join a tribe?',
						'How can I report inappropriate behavior of other uppers?'
					],
					final: false
				}
			break;
			case utils.cleanText('Partners in general'):
				return {
					response: 'Here follow some options for you to choose from, based on frequently asked questions on partners.',
					followups: [
						'What is a partner?',
						'Who can accept partners to part-up?',
						'Why are all partners equal?'
					],
					final: false
				}
			break;
			case utils.cleanText('Partners in my part-up'):
				return {
					response: 'You are very specific, my friend! You\'ve reached an end here, please select one of the following options to get your answer!',
					followups: [
						'How can I rate the partners in my part-up?',
						'Why do I have to rate my partners?',
						'How many partners or supporters can join my part-up?',
						'How do I settle an argument with my partners within a part-up?'
					],
					final: false
				}
			break;
			case utils.cleanText('Supporters'):
				return {
					response: 'Came across supporters and would like to know more? Select one of the next options to get you answer.',
					followups: [
						'What is a supporter?',
						'How many partners or supporters can join my part-up?'
					],
					final: false
				}
			break;
			case utils.cleanText('Our Product'):
				return {
					response: 'We are very proud of Part-up, and are delighted that you show interest. Maybe these following options will answer your question.',
					followups: [
						'Why is Part-up free to use?',
						'Why did no one else come up with the idea of Part-up?',
						'How is Part-up different?'
					],
					final: false
				}
			break;
			case utils.cleanText('Miscellaneous'):
				return {
					response: 'Everything about our company that\'s not specifically about the product is listed here.',
					followups: [
						'Where can I meet the founders?',
						'Where is your HQ?',
						'Does the part-up source code have an open source license?'
					],
					final: false
				}
			break;
			// Finals
			case utils.cleanText('What is a part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('What is an upper?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How do I login to part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Should I login using Facebook and LinkedIn?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How do I join a part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Why do I have to rate my partners?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How can I rate the partners in my part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Who can see my rating?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('What happens if I get a bad rating?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('What is a partner?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('What is a supporter?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('What is an activity?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How can I invite other uppers to my part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Change the mail program'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Why can I only invite uppers to activities and not to my part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How can I change the order of my activities?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Can I share part-ups on social media?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Can I use part-up in my organization?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('What is a tribe?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How do I get a tribe?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Do I need a tribe?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Why do I have to add a picture to my part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Who can accept partners to part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How many partners or supporters can join my part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('What is the maximum duration of a part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('What is that number added to my profile picture?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Why should I add my social profiles and phone number?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Why do I need a premium account for a private part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How many uppers can join a tribe?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How many part-ups can I start within a tribe?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Can I pay people to work on my part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Can I earn money working in part-ups?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Can I delete my account?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Why are all partners equal?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How do I keep an overview?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How do I settle an argument with my partners within a part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How can I report inappropriate behavior of other uppers?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Why is part-up free to use?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Why did no one else come up with the idea of part-up?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('How is part-up different?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Should I use part-up if I have my team already?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Can I copy part-ups?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Where can I meet the founders?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Where is your HQ?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Does the part-up source code have an open source license?'):
				return {
					final: true
				}
			break;
			case utils.cleanText('Is there anyway to track action - not just comment on the activities and messages? Is the platform mainly made to facilitate discussions or also to actually work together or should one use another channel for further collaboration?'):
				return {
					final: true
				}
			break;
			default:
				return {
					final: true
				}
		}
	};

	// Compares input-question with answers from the FAQ-page
	function check(question) {
		switch (question) {
			case utils.cleanText('What is a part-up?'):
				return {
					response: 'A part-up is a temporary team that works together to realize a shared purpose.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('What is an upper?'):
				return {
					response: 'An upper is a user of Part-up. Someone who is open for collaboration. So even though we’re a Dutch startup, we’re not talking about drugs here :).',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How do I login to part-up?'):
				return {
					response: 'On <a href="http://part-up.com" target="_blank">http://part-up.com</a> you see two buttons in the top right corner. Register and login. Choose register the first time. You can only login once you registred. Once you’ve registered you’ll automatically be logged in.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Should I login using Facebook and LinkedIn?'):
				return {
					response: 'If you login using Facebook or LinkedIn, we’ll automatically link your account and you don’t have to remember a separate Part-up password. Choose your favorite. If you prefer not to use these, you can simply register on Part-up without Facebook or LinkedIn. Take care that you’ll use the same way off logging in as you registered next time, so you will not create different accounts for yourself.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How do I join a part-up?'):
				return {
					response: 'You can join a part-up by starting the conversation on the update timeline. At that moment you will be a supporter of the part-up.  If you apply to do one of the activities, by clicking “I want to do this”,  you’ll be asked for your motivation. Why should you be the one to work with and do this activity? Once you’re accepted by the current partners, you’ll be a partner in the part-up as well. You’ve joined! Realize that from this moment on, you’re expected to be committed to the part-up result. Your contribution(s) will be rated by the other partners. ',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Why do I have to rate my partners?'):
				return {
					response: 'Feedback is a positive thing. You can learn from the feedback of others to improve yourself and your teamwork. We will also use this feedback to introduce you to new part-ups that fit your profile.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How can I rate the partners in my part-up?'):
				return {
					response: 'Once you’re a partner in the part-up, you can rate the contributions to activities of other partners. Click on one of the activities and on the right hand side of every contribution you’ll see “no rating yet” or the current average rating of this partner. You can give ratings by adjusting the slider to the positive right side, or negative left side, according to your feelings about the contribution. You can also add extra text to explain your feedback. ',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Who can see my rating?'):
				return {
					response: 'We’re developing an overview of all the ratings you gave and received. Click on anyone’s profile to see their rating and the feedback they gave others. We love transparency. We believe feedback is a positive thing and will make you better. Remember that the feedback you give is also visible on your profile. Rating helps you to find your talents, and helps others to select the best team members. ',
					checkKeyword: false
				}
			break;
			case utils.cleanText('What happens if I get a bad rating?'):
				return {
					response: 'Congratulations, you have just learned something to improve. Feel free to ask the person that gave you the rating how you can do it better next time. Be open to learn. And try to get more (and better) ratings. People understand that someone who is rated a little less positive only once, isn’t always a bad team player. Especially not if you’ve gathered many good ratings to balance out the occasional not so great ones. We make sure negative feedback won’t stick to your profile for life.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('What is a partner?'):
				return {
					response: 'A partner is an upper in your team who does at least one of the activities in your part-up. You can become a partner by applying for one of the activities. A partner is allowed to add and edit the Part-up description and activities. Any partner can accept new partners to the part-up.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('What is a supporter?'):
				return {
					response: 'Uppers support your part-up by giving you tips and by sharing their knowledge and experience. You can become a supporter by leaving a message for the team on the update time line of a part-up, or simply by clicking the “Support” button. ',
					checkKeyword: false
				}
			break;
			case utils.cleanText('What is an activity?'):
				return {
					response: 'A part-up is built out of activities. Activities are created to allow uppers to take part in certain parts of the part-up. Every activity can have one or more partners who execute the activity. Make sure you complete all activities before the end date of the part-up (or edit the end date of course ;-) ). ',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How can I invite other uppers to my part-up?'):
				return {
					response: 'There are several options to invite uppers to your part-up. First you see the sharing buttons on the right-bottom of your part-up. Share the URL to your part-up on social media or through mail. Since uppers can only join a part-up by selecting a specific activity that they want to do, the best thing is to invite uppers from an activity. Click on the activity you want to share and select invite uppers. You see suggested uppers by our matching algorithm. You can also search for people that created a Part-up account. If you can’t find anyone, but you know their mail, you can select ‘Invite uppers by e-mail’. Enter a name and a mailadres and they will receive an automated message to join your part-up. ',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Change the mail program'):
				return {
					response: 'When you click on the share by mail button, it will open your default mail program. To change this you have to alter your local device settings. On windows this is:<br><a href="http://windows.microsoft.com/nl-nl/windows/change-default-programs#1TC=windows-7" target="_blank">http://windows.microsoft.com/nl-nl/windows/change-default-programs#1TC=windows-7</a>',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Why can I only invite uppers to activities and not to my part-up?'):
				return {
					response: 'We believe that you only become team member by actively contributing to the Part-up. Moreover, all partners have a shared responsibility for the Part-up result. You cannot be held responsible if you are not involved in the execution of at least one of the activities.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How can I change the order of my activities?'):
				return {
					response: 'Activities are displayed in the order they have been entered. If you want to change this order you can add a date to the activity. Click on the activity, choose edit and set a date. The activities will now be sorted in time.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Can I share part-ups on social media?'):
				return {
					response: 'Yes, and you should! As much as possible! If you want to let people know about the existence of your part-up, you can always share your part-up on social media, or send a link by mail. You’ll find the share buttons at the bottom right of your part-up.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Can I use part-up in my organization?'):
				return {
					response: 'Yes, Part-up is designed to (organize) work inside, between and outside organizations. You can request a tribe, to share work (part-ups) inside your organization. ',
					checkKeyword: false
				}
			break;
			case utils.cleanText('What is a tribe?'):
				return {
					response: 'A tribe is a public, invite-only or private environment of uppers and part-ups. Tribes can be branded and managed by the tribe leader. Tribes allow a group of people and part-ups to stick together.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How do I get a tribe?'):
				return {
					response: 'You can request pricing and tribe information at <a href="www.socialorganizing.com" target="_blank">www.socialorganizing.com</a>',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Do I need a tribe?'):
				return {
					response: 'No you don’t, but it might be handy! Especially if you work together often with a specific group of people. Organizations, departments but also communities of self employed or social communities can organize themselves in a tribe and manage their part-ups and uppers.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Why do I have to add a picture to my part-up?'):
				return {
					response: 'There are a lot of part-ups to choose from. So why should people start working on yours? We know: because it’s you. But others might not. Therefore pick an appealing picture, something that symbolizes what you want to realize together. It will trigger other uppers to join!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Who can accept partners to part-up?'):
				return {
					response: 'Part-up is build on trust. The one to start the part-up is able to accept his or her first partner. From there on you’re equals; every partner can accept a new partner. Therefore communication between partners is key. And of course the updates show who accepted the new partner.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How many partners or supporters can join my part-up?'):
				return {
					response: 'We did not set a limit to the amount of uppers joining your part-up. Not for partners, nor for supporters. But we know that teams are most effective when you are with a maximum of eight people. Do you need more partners? Then think about organizing your team in a set of linked part-ups. Oh! You can’t have enough supporters, a good suggestion or tip can always come in handy.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('What is the maximum duration of a part-up?'):
				return {
					response: 'There is no technical time limit to the duration of a part-up. We do however always ask you to set an end date for your part-up. Because short term projects will keep the energy of the team members flowing. And by setting an end date, they are able to commit to your part-up. Because no one can commit to something for life. Except for me and my wife of course.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('What is that number added to my profile picture?'):
				return {
					response: 'We gave you a magic number! Hope you like it. The magic number corresponds with your activity and reliability on Part-up. If you are very active your number might rise. To what level? The next level!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Why should I add my social profiles and phone number?'):
				return {
					response: 'By sharing your social media profiles people get an impression of you as a person. Who you are, what you do or what you find interesting? This will make your profile more trustworthy. And adding your phone number and Skype name gives your partners the possibility to reach out to you in person (soon these will be visible for the partners in your part-up).',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Why do I need a premium account for a private part-up?'):
				return {
					response: 'By working together on Part-up each upper is creating value. You share knowledge, co-create your project and give others access to work. When you create a private part-up, only the invited uppers to that part-up will benefit. That’s why we ask you to provide an alternative value to the community, by paying a small fee. And of course it helps us to pay expenses and keep improving the value of Part-up for you!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How many uppers can join a tribe?'):
				return {
					response: 'As with the part-ups, we don’t limit you to a maximum of uppers to join your tribe. We do have some advice though. Best practise is that around 100 - 150 uppers in a tribe (at max.) will work best. This way you  will still be able to get to know them in person and at the same time have a fair chance that the skills you’re looking for can be found within your tribe (and you can always invite uppers outside of your tribe in your part-ups).',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How many part-ups can I start within a tribe?'):
				return {
					response: 'There is no limit to the number of part-ups you can start within a tribe. The more the better, because this means your Part-up tribe is working for you!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Can I pay people to work on my part-up?'):
				return {
					response: 'Yes, you can. When you create a part-up you can indicate the available budget. This is a signal for uppers that they can earn some money when they apply. In part-ups with budget we allow people to apply for an activity with an number of hours and an hour rate. It’s up to the partners in the part-up to accept or reject the proposed contribution. Please motivate rejections, so people can apply again, perhaps with a lower hour rate. Currently we’re not facilitating the billing process yet.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Can I earn money working in part-ups?'):
				return {
					response: 'Yes. We believe in a future full of jobs for anyone. You’ll be able to participate both in paid and unpaid part-ups. It’s our vision to allow an income for anyone in part-ups with their talents. Of course this requires enough people willing to start part-ups with budget, or people that add budget to part-ups.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Can I delete my account?'):
				return {
					response: 'Currently is not available to delete your account automatically yet. We’re working on this feature. Please let us know by mail (<a href="mailto:info@part-up.com">info@part-up.com</a>) so we can delete your account manually.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Why are all partners equal?'):
				return {
					response: 'Because no one can be more equal than others. Every partner brings a unique value to the team. And you will need each partner to realize the shared purpose, and therefore their commitment. If you want someone to do (or not do) something, the easiest way is to just ask them. You can of course still introduce roles in your part-up to organize collaboration, if you like.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How do I keep an overview?'):
				return {
					response: 'The activities page in your part-up is designed to maintain an overview of all activities. If this list becomes to long, you might want to consider starting another part-up for certain activities. In future development we want to allow users to create linked part-ups. In this way you can create a hierarchy of part-ups. Which can be necessary for larger program or project management. ',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How do I settle an argument with my partners within a part-up?'):
				return {
					response: 'How do you settle an argument in real life? There you have your answer (hope you don’t regularly use your fists...). You will have to face your fears and talk about the issues. You might conclude that it is better if one of the partners leaves the part-up. In practice this means that he or she will have to delete their contributions from the activities in the part-up.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How can I report inappropriate behavior of other uppers?'):
				return {
					response: 'First of all we’re sorry that you encountered inappropriate behavior on Part-up. We’re working hard to make this a positive community of people with an drive to realize cool part-ups. So be sure to make clear to the upper that his or her behavior is not accepted. We hope this will have the desired effect! If not, you can always report any inappropriate behavior at <a href="mailto:team@part-up.com">team@part-up.com</a>. The Part-up Police will come and help you get the bad guys!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Why is part-up free to use?'):
				return {
					response: 'We believe the Part-up way of working is how work should be organized. We intend to give the world an infrastructure to organize anything with less organizations. This will make the world a better place. Part-up is a social impact start-up, returning its profit to create more impact. Part-up can also be free because people can buy tribes and premium accounts. With tribes and a premium account users can fence off their part-ups. Doing this, they don’t add value to the network effect of growing Part-up. Therefore they pay a fee as an alternative way of adding value :)!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Why did no one else come up with the idea of part-up?'):
				return {
					response: 'This is something we ponder over every day (no, not really). But, if it is such a simple idea, then why are we the only one around? Please let us know, if you find anyone with a similar marketplace for teamwork. We like to co-operate with other initiatives to automatically match people in teams.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('How is part-up different?'):
				return {
					response: 'We are in between two types of platforms:<br>The current collaboration software assumes that you have team already (Slack, Yammer, Basecamp, Trello, … ). Part-up helps you build a team!<br>The current competence marketplaces all give you one person (Elance, Freelancer, Twago, …), Part-up gives you a team!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Should I use part-up if I have my team already?'):
				return {
					response: 'Even though we’re focused on giving you a team, there is a good reason to use Part-up with your current team anyway. First, you can define and allocate activities together. Second, you can rate each others contributions to activities. This rating will add to your profile and help all team members to be matched and get access to better teams in the future! So take your team, and be welcome!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Can I copy part-ups?'):
				return {
					response: 'We created the possibility to copy the activities from one part-up to another. When you start a Part-up, you’ll find a button on the second step (the activity page) saying: Copy activities from another part-up. We’re planning to make template part-ups in the near future.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Where can I meet the founders?'):
				return {
					response: 'We’re building Part-up out of part-ups. Feel free to join us in creating parts of our wonderful platform and the ‘organizing without organization’ movement. We love to meet while doing something useful to the world :) Oh, and we like to party too. Join one of our events that we will announce through social media!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Where is your HQ?'):
				return {
					response: 'Part-up<br>Bink 36, Office M0.55<br>Binckhorstlaan 36<br>2516 BE The Hague<br>The Netherlands',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Does the part-up source code have an open source license?'):
				return {
					response: 'Yes, as of january 2016 it is published under the <a href="https://github.com/part-up/part-up/blob/master/LICENSE" target="_blank">AGPLv3 license</a> on <a href="https://github.com/part-up" target="_blank">Github</a>. Our goal is to become a fully community owned and community developed platform.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Is there anyway to track action - not just comment on the activities and messages? Is the platform mainly made to facilitate discussions or also to actually work together or should one use another channel for further collaboration?'):
				return {
					response: 'We are still in the very basics. We have some future ideas about how this can be integrated. Currently we had to focus on just allowing discussion on activities, leaving it up to the user’s to inform each other and perhaps switch to another tool.',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Thanks!'):
				return {
					response: 'You\'re welcome!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Thank you!'):
				return {
					response: 'You\'re welcome!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('What is your favorite color'):
				return {
					response: 'Well, blue of course!',
					checkKeyword: false
				}
			break;
			case utils.cleanText('Tell a joke'):
				var responses = [
					'Did you hear about the restaurant on the moon? Great food, no atmosphere.',
					'What do you call a fake noodle? An Impasta.',
					'How many apples grow on a tree? All of them.',
					'Want to hear a joke about paper? Nevermind it\'s tearable.',
					'I just watched a program about beavers. It was the best dam program I\'ve ever seen.',
					'Why did the coffee file a police report? It got mugged.',
					'Dad, did you get a haircut? No I got them all cut.',
					'What do you call a Mexican who has lost his car? Carlos.',
					'Dad, can you put my shoes on? No, I don\'t think they\'ll fit me.',
					'Why did the scarecrow win an award? Because he was outstanding in his field.'
				];

				return {
					response: responses[Math.floor(Math.random() * responses.length)],
					checkKeyword: false
				}
			break;
			case utils.cleanText('Can you tell me a joke?'):
				var responses = [
					'Did you hear about the restaurant on the moon? Great food, no atmosphere.',
					'What do you call a fake noodle? An Impasta.',
					'How many apples grow on a tree? All of them.',
					'Want to hear a joke about paper? Nevermind it\'s tearable.',
					'I just watched a program about beavers. It was the best dam program I\'ve ever seen.',
					'Why did the coffee file a police report? It got mugged.',
					'Dad, did you get a haircut? No I got them all cut.',
					'What do you call a Mexican who has lost his car? Carlos.',
					'Dad, can you put my shoes on? No, I don\'t think they\'ll fit me.',
					'Why did the scarecrow win an award? Because he was outstanding in his field.'
				];

				return {
					response: responses[Math.floor(Math.random() * responses.length)],
					checkKeyword: false
				}
			break;
			case utils.cleanText('Tell me your biggest secret'):
				return {
					response: 'BOOP BEEP BOOP BEEP BOOOP',
					checkKeyword: false
				}
			break;
			default:
				var responses = [
					'I did not fully understand that. Please try again with a different description.',
					'My robot-brain is not fully developed yet to understand your question, try to formulate it some other way.',
					'Sorry, I do not really get what you are saying, try to express it some other way.',
					'I searched through my memory to get an answer for you, but I could not find one! Try some other definitions.',
					'Try to define your question differently.'
				];

				return {
					response: responses[Math.floor(Math.random() * responses.length)] + '<br><br>You can also check our <a href="https://drive.google.com/open?id=1f8OhQ2EIiyh7vsdsBITXjwNcIuwfr2cwDQ2DW5TTcCU" target="_blank">FAQ page</a> or our <a href="">live chat</a> support.',
					checkKeyword: true
				}
		}
	}

	// Object containing keywords and follow-up questons on these keywords
	var keyword = {
		// List of keywords
		list: [
			'product',
			'user',
			'users',
			'company',
			'partup',
			'partups',
			'organization',
			'duration',
			'pay',
			'money',
			'socialmedia',
			'overview',
			'copy',
			'rate',
			'rating',
			'activity',
			'activities',
			'tribe',
			'tribes',
			'mail',
			'email',
			'account',
			'login',
			'facebook',
			'linkedin',
			'profile',
			'picture',
			'phone',
			'premium',
			'private',
			'delete',
			'upper',
			'uppers',
			'invite',
			'join',
			'report',
			'partner',
			'partners',
			'argument',
			'supporter',
			'supporters',
			'free',
			'idea',
			'different',
			'founder',
			'hq',
			'license'
		],
		// Returns follow-up topics / questions based on keyword input
		suggest: function(keyword) {
			switch (keyword) {
				case 'product':
					return [
						'Part-ups',
						'Rating',
						'Activities',
						'Tribes',
						'Mail'
					];
				break;
				case 'user':
					return [
						'Account',
						'Uppers',
						'Partners',
						'Supporters'
					];
				break;
				case 'users':
					return [
						'Account',
						'Uppers',
						'Partners',
						'Supporters'
					];
				break;
				case 'company':
					return [
						'Our Product',
						'Miscellaneous'
					];
				break;
				case 'partup':
					return [
						'Part-ups in general',
						'Using part-ups'
					];
				break;
				case 'partups':
					return [
						'Part-ups in general',
						'Using part-ups'
					];
				break;
				case 'organization':
					return [
						'Can I use Part-up in my organization?'
					];
				break;
				case 'duration':
					return [
						'What is the maximum duration of a part-up?'
					];
				break;
				case 'pay':
					return [
						'Can I pay people to work on my part-up?',
						'Can I earn money working in part-ups?'
					];
				break;
				case 'money':
					return [
						'Can I pay people to work on my part-up?',
						'Can I earn money working in part-ups?'
					];
				break;
				case 'socialmedia':
					return [
						'Should I login using Facebook and LinkedIn?',
						'Why should I add my social profiles and phone number?',
						'Can I share part-ups on social media'
					];
				break;
				case 'overview':
					return [
						'How do I keep an overview?'
					];
				break;
				case 'copy':
					return [
						'Can I copy part-ups?'
					];
				break;
				case 'rate':
					return [
						'Who can see my rating?',
						'What happens if I get a bad rating',
						'How can I rate the partners in my part-up?',
						'Why do I have to rate my partners?'
					];
				break;
				case 'rating':
					return [
						'Who can see my rating?',
						'What happens if I get a bad rating',
						'How can I rate the partners in my part-up?',
						'Why do I have to rate my partners?'
					];
				break;
				case 'activity':
					return [
						'What is an activity?',
						'Why can I only invite uppers to activities and not to my part-up?',
						'How can I change the order of my activities?'
					];
				break;
				case 'activities':
					return [
						'What is an activity?',
						'Why can I only invite uppers to activities and not to my part-up?',
						'How can I change the order of my activities?'
					];
				break;
				case 'tribe':
					return [
						'What is a tribe?',
						'How do I get a tribe?',
						'Do I need a tribe?',
						'How many uppers can join a tribe?',
						'How many part-ups can I start within a tribe?'
					];
				break;
				case 'tribes':
					return [
						'What is a tribe?',
						'How do I get a tribe?',
						'Do I need a tribe?',
						'How many uppers can join a tribe?',
						'How many part-ups can I start within a tribe?'
					];
				break;
				case 'mail':
					return [
						'Change the mail program'
					];
				break;
				case 'email':
					return [
						'Change the mail program'
					];
				break;
				case 'account':
					return [
						'How do I login to Part-up?',
						'Should I login using Facebook and LinkedIn?',
						'What is that number added to my profile picture?',
						'Why should I add my social profiles and phone number?',
						'Why do I need a premium account for a private part-up?',
						'Can I delete my account?'
					];
				break;
				case 'login':
					return [
						'How do I login to Part-up?',
						'Should I login using Facebook and LinkedIn?'
					];
				break;
				case 'facebook':
					return [
						'Should I login using Facebook and LinkedIn?',
						'Why should I add my social profiles and phone number?',
						'Can I share part-ups on social media'
					];
				break;
				case 'linkedin':
					return [
						'Should I login using Facebook and LinkedIn?',
						'Why should I add my social profiles and phone number?',
						'Can I share part-ups on social media'
					];
				break;
				case 'profile':
					return [
						'What is that number added to my profile picture?',
						'Why should I add my social profiles and phone number?'
					];
				break;
				case 'picture':
					return [
						'Why do I have to add a picture to my part-up?',
						'What is that number added to my profile picture?'
					];
				break;
				case 'phone':
					return [
						'Why should I add my social profiles and phone number?'
					];
				break;
				case 'premium':
					return [
						'Why do I need a premium account for a private part-up?'
					];
				break;
				case 'private':
					return [
						'Why do I need a premium account for a private part-up?'
					];
				break;
				case 'delete':
					return [
						'Can I delete my account?'
					];
				break;
				case 'upper':
					return [
						'What is an upper?',
						'How can I invite other uppers to my part-up?',
						'How many uppers can join a tribe?',
						'How can I report inappropriate behavior of other uppers?'
					];
				break;
				case 'uppers':
					return [
						'What is an upper?',
						'How can I invite other uppers to my part-up?',
						'How many uppers can join a tribe?',
						'How can I report inappropriate behavior of other uppers?'
					];
				break;
				case 'invite':
					return [
						'How can I invite other uppers to my part-up?',
						'Why can I only invite uppers to activities and not to my part-up?'
					];
				break;
				case 'join':
					return [
						'How do I join a part-up?',
						'How many partners or supporters can join my part-up?',
						'How many uppers can join a tribe?'
					];
				break;
				case 'report':
					return [
						'How can I report inappropriate behavior of other uppers?'
					];
				break;
				case 'partner':
					return [
						'Partners in general',
						'Partners in my part-up'
					];
				break;
				case 'partners':
					return [
						'Partners in general',
						'Partners in my part-up'
					];
				break;
				case 'argument':
					return [
						'How do I settle an argument with my partners within a part-up?'
					];
				break;
				case 'supporter':
					return [
						'What is a supporter?',
						'How many partners or supporters can join my part-up?'
					];
				break;
				case 'supporters':
					return [
						'What is a supporter?',
						'How many partners or supporters can join my part-up?'
					];
				break;
				case 'free':
					return [
						'Why is Part-up free to use?'
					];
				break;
				case 'idea':
					return [
						'Why did no else come up with the idea of Part-up?'
					];
				break;
				case 'different':
					return [
						'How is Part-up different?'
					];
				break;
				case 'founder':
					return [
						'Where can I meet the founders?'
					];
				break;
				case 'founders':
					return [
						'Where can I meet the founders?'
					];
				break;
				case 'hq':
					return [
						'Where is your HQ?'
					];
				break;
				case 'license':
					return [
						'Does the part-up source code have an open source license?'
					];
				break;
			}
		}
	};

	return {
		options: options,
		check: check,
		keyword: keyword
	};

}) ();
