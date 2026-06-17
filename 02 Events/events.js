// Node.js Event Emitter Example
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
myEmitter.on('greet',(username)=>{
    console.log(`Hello ${username}, From the Event Emitter!`);
});

// Register an event listener for the 'pushNotification' event that will be called only once
myEmitter.once('pushNotification',()=>{
    console.log('You have a new notification!');
});


// Emit the 'greet' event with different usernames
myEmitter.emit('greet' , 'Ali');
myEmitter.emit('greet' , 'JS');
// Emit the 'pushNotification' event multiple times
myEmitter.emit('pushNotification');
myEmitter.emit('pushNotification');
myEmitter.emit('greet' , 'Node.js');