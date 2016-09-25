var express = require('express');
var krautgenerator = require('./src/krautgenerator');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    krautgenerator.createParagraph(function(error, paragraph) {
        response.render('pages/index', { paragraph: paragraph });
    });
});


var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/kraut', function(req, res) {
    krautgenerator.createParagraph(function(error, paragraph) {
        res.json({ kraut: paragraph });
    });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});