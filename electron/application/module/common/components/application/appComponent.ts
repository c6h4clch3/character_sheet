export class ApplicationComponent implements ng.IComponentOptions {
  public controller = ApplicationController;
  public template = require('./appTemplate.html');
}

export class ApplicationController implements ng.IController {
  constructor() {
    'ngInject';
  }
}
