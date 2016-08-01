var krautreader = require('./krautreader');
var articles = krautreader.getMeSomeKraut('./src/kraut/artikel.txt');
var nouns = krautreader.getMeSomeKraut('./src/kraut/substantive.txt');
var verbs = krautreader.getMeSomeKraut('./src/kraut/verben.txt');
var adjectives = krautreader.getMeSomeKraut('./src/kraut/adjektive.txt');
var exclamations = krautreader.getMeSomeKraut('./src/kraut/ausrufe.txt');

// thanks man!
// http://stackoverflow.com/a/7228322
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createParagraph() {
    let numberOfSentences = random(10, 15);
    let paragraph = '';

    for (let i = 0; i < numberOfSentences; i++) {
        paragraph += createSentence();
    }

    paragraph += exclamations[random(0, exclamations.length - 1)];

    return paragraph;
}

function createSentence() {
    let sentence = '';
    let numberOfWords = random(3, 6);

    switch (numberOfWords) {
        case 3:
            sentence = getRandomArticle() + ' ' + getRandomAdjective() + ' ' + getRandomNoun() + '. ';
            break;

        case 4:
            sentence = getRandomArticle() + ' ' + getRandomAdjective() + ' ' + getRandomNoun() + ' ' + getRandomVerb() + '. ';
            break;

        case 5:
            sentence = getRandomArticle() + ' ' + getRandomNoun() + ' ' + getRandomVerb() + ' ' + getRandomNoun() + ' ' + getRandomNoun() + '. ';
            break;

        case 6:
            sentence = getRandomNoun() + ' und ' + getRandomNoun() + ' ' + getRandomVerb() + ' ' + getRandomAdjective() + ' ' + getRandomNoun() + '. ';
            break;
    }

    return sentence;
}

function getRandomNoun() {
    return nouns[random(0, nouns.length - 1)];
}

function getRandomVerb() {
    return verbs[random(0, verbs.length - 1)];
}

function getRandomAdjective() {
    return adjectives[random(0, adjectives.length - 1)];
}

function getRandomArticle() {
    return articles[random(0, articles.length - 1)];
}

exports.createParagraph = createParagraph;