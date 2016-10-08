import AuthController from './auth.controller';
import authService from './auth.service';
import authForm from './auth.directive';
import configRoute from './config.route';

export default angular
  .module('app.auth', [])
  .controller('AuthController', AuthController)
  .service('authService', authService)
  .directive('authForm', () => new authForm)
  .config(configRoute)
  .name;