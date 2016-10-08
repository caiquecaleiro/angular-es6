class AuthService {
  /*@ngInject*/
  constructor($firebaseAuth, firebaseDataService) {
    this.$firebaseAuth = $firebaseAuth;
    this.firebaseDataService = firebaseDataService;
  }

  /**
   * Creates a new user to access the website. The new user is saved to
   * Firebase.
   * @param {object} user - The user to perform the sign in.
   */
  register(user) {
    return this.firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
  }

  /**
   * Performs the login action to access the website.
   * @param {object} user - The user to perform the login.
   */
  login(user) {
    return this.firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
  }

  /**
   * Performs the logout action.
   */
  logout() {
    return this.firebaseAuthObject.$signOut();
  }

  /**
   * Returns whether the user is logged in or not.
   */
  isLoggedIn() {
    return this.firebaseAuthObject.$getAuth();
  }
}

export default AuthService;