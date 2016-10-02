import MainPanelController from './mainPanel.controller';
import  configRoute  from './config.route';

export default angular
  .module('app.mainPanel', [])
  .config(configRoute)
  .controller('MainPanelController', MainPanelController);