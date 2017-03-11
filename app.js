var express = require('express');
var krautipsum = require('./src/krautipsum');
var app = express();
var router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

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

// REGISTER OUR API ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});