import * as angular from 'angular';
import 'angular-route';
import './module/common';
import './module/newCharacter';
import './style/common.scss';
require('bootstrap/dist/css/bootstrap.css');

const app = angular.module('character_sheet', [
  'ngRoute',
  'character_sheet.application',
  'character_sheet.makeCharacter'
  ]);
angular.bootstrap(document, [app.name], {
  strictDi: true
});
