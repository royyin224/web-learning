(function() {
    /*jshint browser: true */
    'use strict';
    require('app/styles/base.scss');
    module.exports = ng.module('app', [
        require('app/modules/navBar/navBar.js').name
    ]);

    function printMessage(status='not working') {
        let message = 'ES6';
        console.log(`${message} is ${status}`);
    }
    printMessage('working');
}());