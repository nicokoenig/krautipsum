var kraut = require('kraut');
var greetingsOrg = kraut.greetings.all();
var articlesOrg = ['Der', 'Die', 'Das', 'Dem'];
var nounsOrg = kraut.nouns.all();
var verbsOrg = kraut.verbs.all();
var adjectivesOrg = kraut.adjectives.all();
var exclamationsOrg = kraut.exclamations.all();

var greetings = [];
var articles = [];
var nouns = [];
var verbs = [];
var adjectives = []
var exclamations = [];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
    var m = array.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    
    return array;
}

function createKrautCopies() {
    greetings = greetingsOrg.slice(0);
    articles = articlesOrg.slice(0);
    nouns = nounsOrg.slice(0);
    verbs = verbsOrg.slice(0);
    adjectives = adjectivesOrg.slice(0);
    exclamations = exclamationsOrg.slice(0);
}

function shuffleKraut() {
    greetings = shuffle(greetings);
    articles = shuffle(articles);
    nouns = shuffle(nouns);
    verbs = shuffle(verbs)
    adjectives = shuffle(adjectives);
    exclamations = shuffle(exclamations);
}

function krautipsum(callback) {

    createKrautCopies();
    shuffleKraut();

    let numberOfSentences = random(10, 15);
    let paragraph = '';

    paragraph += getRandomGreeting() + '! ';

    for (let i = 0; i < numberOfSentences; i++) {
        paragraph += createSentence();
    }

    paragraph += getRandomExclamation();

    callback(null, paragraph);
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
            sentence = getRandomNoun() + ' und ' + getRandomNoun() + ' ' + getRandomVerb() + ' ' + getRandomAdjective() + ' ' + getRandomNoun() + '. ';
            break;

        case 6:
            sentence = getRandomArticle() + ' ' + getRandomNoun() + ' ' + getRandomVerb() + ' ' + getRandomArticle().toLowerCase() + ' ' + getRandomAdjective() + ' ' + getRandomNoun() + '. ';
            break;
    }

    return sentence;
}

function getRandomGreeting() {
    return greetings.pop();
}

function getRandomExclamation() {
    return exclamations.pop();
}

function getRandomNoun() {
    return nouns.pop();
}

function getRandomVerb() {
    return verbs.pop();
}

function getRandomAdjective() {
    return adjectives.pop();
}

function getRandomArticle() {
    return articles[random(0, articles.length - 1)];
}

module.exports = krautipsum;