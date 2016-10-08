/*@ngInject*/
function configRoute($stateProvider) {
  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'src/app/auth/register.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
}

export default configRoute;