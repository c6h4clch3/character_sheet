export class MakeCharacterComponent implements ng.IComponentOptions {
    public template = require('./MakeCharacterTemplate.html');
    public controller = MakeCharacterController;
    public binding = {
        name: '@'
    };
}

export class MakeCharacterController implements ng.IController {
    public name: string;
    constructor() {
        'ngInject';
    }
}
