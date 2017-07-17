import * as angular from 'angular';

import { MakeCharacterComponent } from './components/MakeCharacterComponent';
import { config as MakeCharacterConfig } from './config/route';

angular.module('character_sheet.makeCharacter', ['ngRoute'])
    .component('makeCharacter', new MakeCharacterComponent())
    .config(MakeCharacterConfig);
