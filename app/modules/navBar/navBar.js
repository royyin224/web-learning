require('./navBar.scss');
export default angular.module('app.navBar', [])
.directive('navBar', require('./navBar.controller'));