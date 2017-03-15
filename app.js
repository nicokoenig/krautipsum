var express = require('express');
var krautipsum = require('./src/krautipsum');
var kraut = require('kraut');
var app = express();
var cors = require('cors');
var router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    krautipsum(function(error, paragraph) {
        response.render('pages/index', { paragraph: paragraph });
    });
});

router.get('/kraut', function(req, res) {
    krautipsum(function(error, paragraph) {
        res.json({ kraut: paragraph });
    });
});

// API stuff ---------------------------------------------
router.get('/greeting', function(req, res) {
    res.json({ noun: kraut.greetings.random() });
});

router.get('/adjective', function(req, res) {
    res.json({ noun: kraut.adjectives.random() });
});

router.get('/noun', function(req, res) {
    res.json({ noun: kraut.nouns.random() });
});

// REGISTER OUR API ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});