const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

myEmitter.on('error', (err) => {
    console.error(`An error occurred: ${err.message}`);
});

// Emit an error event with an Error object
myEmitter.emit('error', new Error('Something went wrong!'));