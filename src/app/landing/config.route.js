/*@ngInject*/
function configRoute($stateProvider) {
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'src/app/landing/landing.html'
    });
}

export default configRoute;