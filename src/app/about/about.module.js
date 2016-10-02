import AboutController from './about.controller';
import AboutService from './about.service';
import configRoute from './config.route';

export default angular
  .module('app.about', [])
  .controller('AboutController', AboutController)
  .service('AboutService', AboutService)
  .config(configRoute);