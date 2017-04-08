# Chatbot proposal for the Part-up project
![Part-up Chatbot banner](https://raw.githubusercontent.com/BerendPronk/minor/master/assets/pu/chatbot-banner.jpg)

This take on developing a chatbot for community platform [Part-up](https://part-up.com) was made in two and a half days. It tries to provide a solution to [issue #560](https://github.com/part-up/part-up/issues/560) on the Github repository of Part-up, a request to add a chatbot for the platform.

Development for this feature was not easiliy possible on Windows machines, that's the reason it's built on a seperate repository.  
If you wish to implement this into the already existing code of Part-up, I highly encourage you to do so.

You can check out the open source project on the [Part-up repository](https://github.com/part-up/part-up).

## Demo
A live demo of this chatbot is available for you to experience. Check it out on the following address. 

[Live demo of Part-up chatbot](https://berendpronk.github.io/minor/pu/files/chatbot/)

---

## Features
The chatbot is able to perform multiple actions, like:

- Providing the user with certain topics, to eventually end up with specific questions from the FAQ-page of Part-up
- Scan the user's input on determined keywords, to give follow-up topics on the given question
- Handling questions, despite not being exact duplicates of questions from the FAQ page:  
  *example: How do I join a part-up?*
  - *"How do I join a part-up?"* - When the user submits the exact question
  - *"How do I 'join' a Partup?!?"* - When the user submits the question with/without unnecessary special characters/spaces
  - *"HOW DO I JOIN A PART-UP?"* - When the user submits the question with (some) capital letters
  - *"Howd o I joina part-up ?"* - When the user types in the question too fast, and misplaces spaces
  - *"Where can I join a part-up?"* - When the user doesn't submit the exact question, but the system recognizes a keyword

  **Follow-up questions output in last case:**  
    *How do I join a part-up?  
    How many partners or supporters can join my part-up?  
    How many uppers can join a tribe?*
- Give feedback at all costs. Even no input is recognized, it'll guide the user towards the FAQ-page or the live chat support

---

## Performance
To improve on the overall performance of this feature, every asset has been compressed, and mangled if needed. The original files still exist in this repository for you to inspect.

Since this repository just features an addition to Part-up, the code will receive the extra performance boosts that exist on the current production environment of Part-up.
With every performance-based addition of the many contributers the open source project has, the performance of this chatbot will increase likewise.

---

## Support
The following support-tables are based on the full-experience of this feature, tested on the device lab available at our university. It will probably work, but the styling could deviate in the 'unsupported' browsers.

### Desktop
- [ ] Internet Explorer 5, 6, 7 and 8
- [x] Internet Explorer 9+
- [x] Microsoft Edge
- [x] Google Chrome
- [x] Mozilla Firefox
- [x] OSX Safari
- [x] Opera

### Mobile
- [x] IE Mobile
- [x] Opera Mini
- [x] Chrome for Android
- [ ] iOS Safari 6.1 (does not provide suggested options)
- [x] iOS Safari 

### E-reader
- [ ] Amazon Kindle Experimental Browser (does not provide suggested options)

---

## Feedback
If you happen to notice any flaw on my part that couldn't be left undone, feel free to notify me by creating an issue on this repository. Pull request are very much appreciated, as well.

## Resources
Text-processing loader: [UG, Grasphub](http://www.grasphub.com/2015/04/best-loading-animation-gifs/)

Seamless doodle background: [Kostenkodesign, Vectorstock](https://www.vectorstock.com/royalty-free-vector/cartoon-cute-hand-drawn-school-seamless-pattern-vector-10646562)

## License
[MIT](https://github.com/BerendPronk/minor-part-up/blob/master/LICENSE.md)

Copyright - Berend Pronk

2017
