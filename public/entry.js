// css stuff
require("normalize.css/normalize.css");
require("./style.scss");
require("./fontello/css/krautipsum.css");

// js stuff
var Clipboard = require("clipboard/dist/clipboard.min.js");

// Clipboard stuff
var clipboard = new Clipboard('.button__copy');
clipboard.on('success', function(e) {
    e.clearSelection();
});