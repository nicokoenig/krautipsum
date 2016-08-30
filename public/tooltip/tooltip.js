// Just a little tooltip made by myself
/*
    Usage:

    - add tooltip.css to your css
    - add tooltip.js to your js

    var tp = new Tooltip(selector, message, attchToClickHandler, duration);
    tp.showTooltip();

 */
function Tooltip(selector, text, attachToClickHandler, duration) {
    this.attachToClickHandler = attachToClickHandler || false;
    this.duration = duration || 2000;
    this.selector = selector;
    this.text = text;

    this.parent = document.querySelector(this.selector);
    this.tooltip = document.createElement('span');
    this.tooltip.className = "tooltip";

    if (this.attachToClickHandler) {
        this.parent.addEventListener('click', this, false);
    }
}

Tooltip.prototype.handleEvent = function(event) {
    switch (event.type) {
        case 'click':
            this.showTooltip();
            break;
    }
}

Tooltip.prototype.showTooltip = function(message, duration) {
    message = message || this.message;
    duration = duration || this.duration;
    this.parent.appendChild(this.tooltip);
    var el = document.querySelector('.tooltip');
    el.innerText = message;
    var elRect = el.getBoundingClientRect();
    var parentRect = el.parentElement.getBoundingClientRect();
    var x = (parentRect.width - elRect.width) / 2;
    el.style.left = x + 'px';
    el.style.top = (parentRect.height + 10) + 'px';

    var that = this;
    setTimeout(function() {
        that.tooltip.remove();
    }, duration);
};

module.exports = Tooltip;