import angular from 'angular';

import core from './core/core.module';
import landing from './landing/landing.module';

angular
  .module('app', [
    core,
    landing
  ])
  .config(configFunction);

/*@ngInject*/
function configFunction($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}