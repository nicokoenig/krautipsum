function getMeSomeKraut(file) {

    var list = [];

    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(file)
    });

    lineReader.on('line', function(line) {
        var line = line.trim();
        if (line.length > 0) {
            list.push(line);
        }
    });

    return list;
}

exports.getMeSomeKraut = getMeSomeKraut;