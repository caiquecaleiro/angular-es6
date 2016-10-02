class AboutService {
  /* @ngInject */
  constructor($q) {
    this.$q = $q;
  }

  getDescription() {
    return this.$q.when('The description');
  }
}

export default AboutService;