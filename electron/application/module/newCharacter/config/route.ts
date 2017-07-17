export function config($routeProvider: ng.route.IRouteProvider) {
    'ngInject';
    $routeProvider.when('/makeCharacter', {
        template: '<make-character></make-character>'
    }).when('/makeCharacter/:name', {
        template: ($routeParams: ng.route.IRouteParamsService): string => {
            const name: string = $routeParams['name'];
            return `<make-character name="${ name }"></make-character>`;
        }
    });
}
