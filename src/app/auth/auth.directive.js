class AuthForm {
  constructor() {
    this.templateUrl = './src/app/auth/authForm.html';
    this.restrict = 'E';
    this.controller = AuthFormController;
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {
      error: '=',
      formTitle: '@',
      submitAction: '&'
    };
  }
}

class AuthFormController {
  constructor() {
    this.vm = {
      email: '',
      password: ''
    };
  }
}

export default AuthForm;