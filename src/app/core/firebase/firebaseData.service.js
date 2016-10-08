import firebase from 'firebase';

class FirebaseDataService {
  /*@ngInject*/
  constructor() {
    const root = firebase.database().ref();
    this.root = root;
    this.users = root.child('users');
  }
}

export default FirebaseDataService;