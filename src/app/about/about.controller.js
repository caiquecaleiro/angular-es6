class AboutController {
  /* @ngInject */
  constructor(AboutService) {
    this.aboutService = AboutService;
    this.description = 'Please, load the description!';
  }

  loadDescription() {
    this.aboutService.getDescription()
      .then(response => this.description = response);
  }
}

export default AboutController;