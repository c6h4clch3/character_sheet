import * as angular from 'angular';

const app = angular.module('character_sheet', []);
angular.bootstrap(document, [app.name], {
  strictDi: true
});
