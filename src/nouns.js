var nouns = [];

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./src/kraut/substantive.txt')
});

lineReader.on('line', function(line) {
    var line = line.trim();
    if (line.length > 0) {
        nouns.push(line);
    }
});

exports.nouns = nouns;