import * as angular from 'angular';

import { ApplicationComponent as CharacterSheetApplicationComponent } from './components/application/appComponent';
import { HeaderComponent as CharacterSheetHeaderComponent } from './components/header/headerComponent';
import { config as applicationRouteConfig } from './config/routes';

angular.module('character_sheet.application', ['ngRoute'])
  .component('characterSheet', new CharacterSheetApplicationComponent())
  .component('characterSheetHeader', new CharacterSheetHeaderComponent())
  .config(applicationRouteConfig);
