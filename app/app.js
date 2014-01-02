var prgrph = angular.module("prgrph", ["firebase", "ngRoute"]);

prgrph .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/board/:boardname', {
        templateUrl: 'app/Partials/board.html',
        controller: 'BoardController'
      }).
      when('/second', {
        templateUrl: 'app/Partials/second.html',
        controller: 'SecondController'
      }).
      otherwise({
        redirectTo: '/board'
      });
  }]);