const eventEmitter = require('events');

class Chat extends eventEmitter {
    sendMessage(message) {
        console.log(`Message sent: ${message}`);
        this.emit('messageSent', message);
    }
}

const chat = new Chat();

chat.on('messageSent', (message) => {
    console.log(`Event received: ${message}`);
});

chat.sendMessage('Hello, World!');
chat.sendMessage('This is a test message.');