import uiRouter from 'angular-ui-router';
import firebaseConfig from './firebase/firebase.config';
import firebaseDataService from './firebase/firebaseData.service';

export default angular
  .module('app.core', [
    uiRouter
  ])
  .service('firebaseDataService', firebaseDataService)
  .run(firebaseConfig)
  .name;