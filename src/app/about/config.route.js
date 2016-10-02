/* @ngInject */
function configRoute($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'src/app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'vm'
    });
}

export default configRoute;