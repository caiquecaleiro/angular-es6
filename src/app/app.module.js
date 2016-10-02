import angular from 'angular';
import uiRouter from 'angular-ui-router';

import mainPanel from './mainPanel/mainPanel.module';
import about from './about/about.module';

angular
  .module('app', [
    uiRouter,
    mainPanel.name,
    about.name
  ])
  .config(configFunction);

configFunction.$inject = ['$urlRouterProvider', '$locationProvider'];

function configFunction($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
}