class AuthController {
  /*@ngInject*/
  constructor($state, authService) {
    this.$state = $state;
    this.authService = authService;
    this.error = null;
  }

  /**
   * Creates a new user to access the website.
   * With the success return, it will execute the login action.
   * @param {object} user - The user to perform the sign in.
   */
  register(user) {
    return this.authService.register(user)
      .then(() => this.login(user))
      .catch(error => this.error = error);
  }

  /**
   * Performs the login action to access the website.
   * The successful action of login redirects the user to the Main List page.
   * @param {object} user - The user to perform the login.
   */
  login(user) {
    return this.authService.login(user)
      .then(() => this.$state.go('landing'))
      .catch(error => this.error = error);
  }
}

export default AuthController;