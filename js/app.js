'use strict'

console.log('hey world!');

let visitorName = prompt('What is your name?');

alert('Welcome to my site ${visitorName}! Please respond yes or no to the following questions');

let questionOneGuess = prompt('dfdfdf').toLowerCase();

if(questionOneGuess === 'y' || questionOneGuess=== 'yes'){
    alert('You are correct!');
}else if(questionOneGuess === 'n' || questionOneGuess=== 'no'){
    alert('You are sadly mistaken');
}

alert('Thanks for playing ${visitorName}')