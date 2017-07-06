import * as angular from 'angular';
import 'angular-route';
import './module/common';
import './style/common.scss';

const app = angular.module('character_sheet', [
  'ngRoute',
  'character_sheet.application'
  ]);
angular.bootstrap(document, [app.name], {
  strictDi: true
});
