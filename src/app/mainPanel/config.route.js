configRoute.$inject = ['$stateProvider'];

export default function configRoute($stateProvider) {
  $stateProvider
    .state('mainPanel', {
      url: '/',
      templateUrl: 'src/app/mainPanel/mainPanel.html',
      controller: 'MainPanelController',
      controllerAs: 'vm'
    });
}