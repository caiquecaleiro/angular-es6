import angular from 'angular';

import configRoute from './config.route';
import core from './core/core.module';
import landing from './landing/landing.module';
import auth from './auth/auth.module';

angular
  .module('app', [
    core,
    landing,
    auth
  ])
  .config(configRoute);