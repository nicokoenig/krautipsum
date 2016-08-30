// css stuff
require("normalize.css/normalize.css");
require("./style.scss");
require("./fontello/css/krautipsum.css");
require("./tooltip/tooltip.css");

// js stuff
var Clipboard = require("clipboard/dist/clipboard.min.js");
var Tooltip = require("./tooltip/tooltip.js");

// Tooltip
var tooltip = new Tooltip('.button__copy', '', false, 1500);

// Clipboard stuff
var clipboard = new Clipboard('.button__copy');
clipboard.on('success', function(e) {
    e.clearSelection();
    tooltip.showTooltip('Successfully copied to clipboard');
});

clipboard.on('error', function(e) {
    tooltip.showTooltip('Oooops, something went wrong, sorry :(');
});