/*@ngInject*/
function configRoute($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}

export default configRoute;