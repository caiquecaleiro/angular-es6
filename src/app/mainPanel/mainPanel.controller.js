class MainPanelController {
  /* @ngInject */
  constructor($state) {
    this.$state =  $state;
    this.description = 'This is the mainPanel controller!';
  }

  changeDescription() {
    this.description = 'The description has changed!';
  }

  showAbout() {
    this.$state.go('about');
  }
}

export default MainPanelController;