import angular from 'angular';
import uiRouter from 'angular-ui-router';

import mainPanel from './mainPanel/mainPanel.module'

angular
  .module('app', [
    uiRouter,
    mainPanel.name
  ])
  .config(configFunction);

configFunction.$inject = ['$urlRouterProvider', '$locationProvider'];

function configFunction($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
}