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

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});