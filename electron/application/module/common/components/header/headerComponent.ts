export class HeaderComponent implements ng.IComponentOptions {
  public controller = HeaderController;
  public template = require('./headerTemplate.html');
}

export class HeaderController implements ng.IController {
  constructor() {
    'ngInject';
  }
}
