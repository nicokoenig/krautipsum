var express = require('express');
var compression = require('compression')
var krautipsum = require('./src/krautipsum');
var kraut = require('kraut');
var KrautBot = require('krautbot');
var app = express();
var cors = require('cors');
var router = express.Router();


app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    krautipsum(function(error, paragraph) {
        response.render('pages/index', { paragraph: paragraph });
    });
});

// API stuff ---------------------------------------------
router.get('/kraut', function(req, res) {
    krautipsum(function(error, paragraph) {
        res.json({ kraut: paragraph });
    });
});

router.get('/sentence', function(req, res) {
    res.json({ sentence: kraut.ipsum.makeSentence() });
});

router.get('/greeting', function(req, res) {
    res.json({ greeting: kraut.greetings.random() });
});

router.get('/adjective', function(req, res) {
    res.json({ adjective: kraut.adjectives.random() });
});

router.get('/noun', function(req, res) {
    res.json({ noun: kraut.nouns.random() });
});

router.get('/verb', function(req, res) {
    res.json({ verb: kraut.verbs.random() });
});

// REGISTER OUR API ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

// KRAUTBOT
const krautBot = new KrautBot();
krautBot.start();