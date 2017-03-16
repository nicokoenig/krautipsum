'use strict';

var expect = require('chai').expect;
var krautipsum = require('../src/krautipsum');

describe('krautipsum', function() {
    
    it('should create fillertext', function() {
        var kraut = krautipsum(function(err, fillertext) {
            expect(fillertext).to.exist;
        });
    });

    it('should create fillertext with white-spaces at end of sentences', function() {
        var kraut = krautipsum(function(err, fillertext) {
            var match = fillertext.match(/\.\s/g);
            expect(match).to.be.not.null;
            expect(match.length).to.be.greaterThan(9);
        });
    });
});