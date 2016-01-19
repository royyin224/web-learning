'use strict';
class NavCtrl {
    constructor() {
        let path = require('path');
        this.menus = require('definitions/menu.json');
        this.app = require('app/../package.json');
        this.siteRoot = '/';
    }
}
export default () => {
    return {
        controller: NavCtrl,
        controllerAs: 'navBar',
        template: require('./navBar.html')
    };
};