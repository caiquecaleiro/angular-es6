import firebase from 'firebase';

/*@ngInject*/
function firebaseConfig() {
  const config = {
    apiKey: 'XXX',
    authDomain: 'xxx.firebaseapp.com',
    databaseURL: 'https://xxx.firebaseio.com',
    storageBucket: 'xxx.appspot.com',
    messagingSenderId: 'xxx'
  };
  firebase.initializeApp(config);
}

export default firebaseConfig;