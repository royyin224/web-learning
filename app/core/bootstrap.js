(function() {
    'use strict';
    require('./vendor')();
    var appModule = require('app/index');
    // if (MODE.production) { //jshint ignore: line
    //     require('./config/production')(appModule);
    // }
    ng.element(document).ready(function() {
        ng.bootstrap(document, [appModule.name], {
            
        });
    });
}());