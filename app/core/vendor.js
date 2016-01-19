(function() {
    'use strict';
    module.exports = function() {
        global.$ = global.jQuery = require('jquery');
        global.ng = require('angular');
        global.momnet = require('moment');
    };
}());