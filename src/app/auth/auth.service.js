import firebase from 'firebase';

class AuthService {
  /*@ngInject*/
  constructor(firebaseDataService) {
    this.firebaseDataService = firebaseDataService;
    this.auth = firebase.auth();
  }

  /**
   * Creates a new user to access the website. The new user is saved to
   * Firebase.
   * @param {object} user - The user to perform the sign in.
   */
  register(user) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  /**
   * Performs the login action to access the website.
   * @param {object} user - The user to perform the login.
   */
  login(user) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  /**
   * Performs the logout action.
   */
  logout() {
    return this.auth.signOut();
  }

  /**
   * Returns whether the user is logged in or not.
   */
  isLoggedIn() {
    return this.auth.getAuth();
  }
}

export default AuthService;