export class ApplicationComponent implements ng.IComponentOptions {
  public controller = ApplicationController;
  public template = require('./appComponent.html');
}

export class ApplicationController implements ng.IController {
  constructor() {
    'ngInject';
  }
}