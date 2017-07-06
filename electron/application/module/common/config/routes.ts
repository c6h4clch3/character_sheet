export function config($routeProvider: ng.route.IRouteProvider) {
  'ngInject';
  $routeProvider.when('/', {
    template: '<div>aaaaaaa</div>'
  }).when('/:wording', {
    template: ((params: ng.route.IRouteParamsService): string => {
      return `<div>${params['wording']}</div>`
    })
  });
}