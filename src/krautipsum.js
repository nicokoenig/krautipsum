var kraut = require('kraut');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function krautipsum(callback) {

    let numberOfSentences = random(10, 15);
    let paragraph = '';

    paragraph += kraut.greetings.random() + ' ';

    for (let i = 0; i < numberOfSentences; i++) {
        paragraph += kraut.ipsum.makeSentence();
    }

    paragraph += kraut.exclamations.random();

    callback(null, paragraph);
}

module.exports = krautipsum;