const chatlog = document.getElementById('chat-log'),
userInput = document.getElementById('user-input'),
sendButton = document.getElementById('send-button'),
buttonIcon = document.getElementById('button-icon'),
info = document.getElementById('info');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        sendMessage();
    }
});

function sendMessag(){
    const message = userInput.value.trim();
    // if message = empty do nothing
    if(message === ''){
        return;
        // if message = developer - show our message
    }else if(message === 'developer'){
        // clear input value
        userInput.value = '';
        // append message as user - we will code its fucntion
        appendMessage('user', message);
        // sets a fake timeout that showing loading on send button
        setTimeout(() =>{
            // send our message as bot(sender : bot)
            appendMessage('bot', 'This Source by Nyakibia Kariiri  \nYotube : nattyKhoene2088');
            // change button icon to default
            buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
            buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
        }, 2000);
        return;
    }

    // else if none of the above
    // appends user message to screen
    appendMessage('user', message);
    userInput.value = '';

    const options = {
        method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'e64f6afa21mshd5dfe25f0d66633p11b453jsn0c0df9af13b2',
		'X-RapidAPI-Host': 'chatgpt146.p.rapidapi.com'
	},
    body: `{"message":[{"role": "user", "content":${message}
}]}`
    }
}