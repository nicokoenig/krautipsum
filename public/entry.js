// css stuff
require("normalize.css/normalize.css");
require("./style.scss");
require("./fontello/css/krautipsum.css");

// favicon stuff
require("./favicon.ico");
require("./favicon-32x32.png");

// js stuff
var Clipboard = require("clipboard/dist/clipboard.min.js");

// Clipboard stuff
var clipboard = new Clipboard('.copy');
clipboard.on('success', function(e) {
    e.clearSelection();
});